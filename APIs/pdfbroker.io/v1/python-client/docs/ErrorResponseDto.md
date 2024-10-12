# ErrorResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**error_message** | **str** | If any error occurs the message will be displayed in here | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.error_response_dto import ErrorResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorResponseDto from a JSON string
error_response_dto_instance = ErrorResponseDto.from_json(json)
# print the JSON string representation of the object
print(ErrorResponseDto.to_json())

# convert the object into a dict
error_response_dto_dict = error_response_dto_instance.to_dict()
# create an instance of ErrorResponseDto from a dict
error_response_dto_from_dict = ErrorResponseDto.from_dict(error_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


