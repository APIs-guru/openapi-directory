# ErrorsDeleteError200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**attachments_deleted** | **int** |  | [optional] 
**blobs_failed** | **int** |  | [optional] 
**blobs_succeeded** | **int** |  | [optional] 
**error_group_id** | **str** |  | [optional] 
**error_id** | **str** |  | [optional] 
**errors_deleted** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.errors_delete_error200_response import ErrorsDeleteError200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsDeleteError200Response from a JSON string
errors_delete_error200_response_instance = ErrorsDeleteError200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsDeleteError200Response.to_json())

# convert the object into a dict
errors_delete_error200_response_dict = errors_delete_error200_response_instance.to_dict()
# create an instance of ErrorsDeleteError200Response from a dict
errors_delete_error200_response_from_dict = ErrorsDeleteError200Response.from_dict(errors_delete_error200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


