# ValidateExclusivityResponse

The response of exclusivity artifacts validation result status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_exclusivity_response import ValidateExclusivityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateExclusivityResponse from a JSON string
validate_exclusivity_response_instance = ValidateExclusivityResponse.from_json(json)
# print the JSON string representation of the object
print(ValidateExclusivityResponse.to_json())

# convert the object into a dict
validate_exclusivity_response_dict = validate_exclusivity_response_instance.to_dict()
# create an instance of ValidateExclusivityResponse from a dict
validate_exclusivity_response_from_dict = ValidateExclusivityResponse.from_dict(validate_exclusivity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


