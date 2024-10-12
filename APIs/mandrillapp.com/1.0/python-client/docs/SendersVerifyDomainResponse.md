# SendersVerifyDomainResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.senders_verify_domain_response import SendersVerifyDomainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendersVerifyDomainResponse from a JSON string
senders_verify_domain_response_instance = SendersVerifyDomainResponse.from_json(json)
# print the JSON string representation of the object
print(SendersVerifyDomainResponse.to_json())

# convert the object into a dict
senders_verify_domain_response_dict = senders_verify_domain_response_instance.to_dict()
# create an instance of SendersVerifyDomainResponse from a dict
senders_verify_domain_response_from_dict = SendersVerifyDomainResponse.from_dict(senders_verify_domain_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


