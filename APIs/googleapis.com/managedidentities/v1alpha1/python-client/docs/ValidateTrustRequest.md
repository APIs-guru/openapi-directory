# ValidateTrustRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trust** | [**Trust**](Trust.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_trust_request import ValidateTrustRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateTrustRequest from a JSON string
validate_trust_request_instance = ValidateTrustRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateTrustRequest.to_json())

# convert the object into a dict
validate_trust_request_dict = validate_trust_request_instance.to_dict()
# create an instance of ValidateTrustRequest from a dict
validate_trust_request_from_dict = ValidateTrustRequest.from_dict(validate_trust_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


