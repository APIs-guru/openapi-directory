# SendersVerifyDomain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**mailbox** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.senders_verify_domain import SendersVerifyDomain

# TODO update the JSON string below
json = "{}"
# create an instance of SendersVerifyDomain from a JSON string
senders_verify_domain_instance = SendersVerifyDomain.from_json(json)
# print the JSON string representation of the object
print(SendersVerifyDomain.to_json())

# convert the object into a dict
senders_verify_domain_dict = senders_verify_domain_instance.to_dict()
# create an instance of SendersVerifyDomain from a dict
senders_verify_domain_from_dict = SendersVerifyDomain.from_dict(senders_verify_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


