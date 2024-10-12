# ApiOperationUpdateRequest

Api Operation Update Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiOperationUpdateRequestProperties**](ApiOperationUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_operation_update_request import ApiOperationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationUpdateRequest from a JSON string
api_operation_update_request_instance = ApiOperationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiOperationUpdateRequest.to_json())

# convert the object into a dict
api_operation_update_request_dict = api_operation_update_request_instance.to_dict()
# create an instance of ApiOperationUpdateRequest from a dict
api_operation_update_request_from_dict = ApiOperationUpdateRequest.from_dict(api_operation_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


