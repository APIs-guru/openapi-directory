# ErrorResponseContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**details** | **str** |  | [optional] 
**errors** | [**List[ErrorResponseContentBase]**](ErrorResponseContentBase.md) |  | [optional] 
**message** | **str** |  | [optional] 
**request_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_response_content import ErrorResponseContent

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseContent from a JSON string
error_response_content_instance = ErrorResponseContent.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseContent.to_json())

# convert the object into a dict
error_response_content_dict = error_response_content_instance.to_dict()
# create an instance of ErrorResponseContent from a dict
error_response_content_from_dict = ErrorResponseContent.from_dict(error_response_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


