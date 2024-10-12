# ErrorsUpdateStateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation** | **str** |  | [optional] 
**state** | **str** |  | 

## Example

```python
from openapi_client.models.errors_update_state_request import ErrorsUpdateStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsUpdateStateRequest from a JSON string
errors_update_state_request_instance = ErrorsUpdateStateRequest.from_json(json)
# print the JSON string representation of the object
print(ErrorsUpdateStateRequest.to_json())

# convert the object into a dict
errors_update_state_request_dict = errors_update_state_request_instance.to_dict()
# create an instance of ErrorsUpdateStateRequest from a dict
errors_update_state_request_from_dict = ErrorsUpdateStateRequest.from_dict(errors_update_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


