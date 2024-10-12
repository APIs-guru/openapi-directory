# Suspenders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suspender** | **List[str]** | Suspender(s) of the token when the token current status is SUSPENDED. Conditional field, only present when token mapping is suspended. Valid values:&lt;br /&gt;    \&quot;I\&quot; - The issuer has requested token suspension.&lt;br /&gt;    \&quot;W\&quot; - Token Requestor (including Wallet Provider) has requested token suspension.&lt;br /&gt;    \&quot;C\&quot; - The cardholder has requested token suspension.&lt;br /&gt;    \&quot;P\&quot; - The Mobile PIN Validation service has requested token suspension. Occurs when the cardholder has entered their Mobile PIN incorrectly too many times whilst performing a transaction.&lt;br /&gt;    \&quot;M\&quot; - The Mobile PIN Change Validation service has requested token suspension. Occurs when the cardholder has entered their Mobile PIN incorrectly too many times whilst changing their mobile pin. | [optional] 

## Example

```python
from openapi_client.models.suspenders import Suspenders

# TODO update the JSON string below
json = "{}"
# create an instance of Suspenders from a JSON string
suspenders_instance = Suspenders.from_json(json)
# print the JSON string representation of the object
print(Suspenders.to_json())

# convert the object into a dict
suspenders_dict = suspenders_instance.to_dict()
# create an instance of Suspenders from a dict
suspenders_from_dict = Suspenders.from_dict(suspenders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


