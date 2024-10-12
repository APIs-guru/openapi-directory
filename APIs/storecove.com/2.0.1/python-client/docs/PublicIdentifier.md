# PublicIdentifier

A public identifier for this customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The actual identifier. | 
**scheme** | **str** | The scheme of the identifier. See &lt;&lt;_receiver_identifiers_list&gt;&gt; for a list. | 

## Example

```python
from openapi_client.models.public_identifier import PublicIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of PublicIdentifier from a JSON string
public_identifier_instance = PublicIdentifier.from_json(json)
# print the JSON string representation of the object
print(PublicIdentifier.to_json())

# convert the object into a dict
public_identifier_dict = public_identifier_instance.to_dict()
# create an instance of PublicIdentifier from a dict
public_identifier_from_dict = PublicIdentifier.from_dict(public_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


