# DefaultResponseDTOOfStatusDTOResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **str** | Reference id for status endpoint              | [optional] 
**status_text** | **str** | Status of API Call              | [optional] 
**url** | **str** | Relative url for stauts check              | [optional] 

## Example

```python
from openapi_client.models.default_response_dtoof_status_dto_result import DefaultResponseDTOOfStatusDTOResult

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultResponseDTOOfStatusDTOResult from a JSON string
default_response_dtoof_status_dto_result_instance = DefaultResponseDTOOfStatusDTOResult.from_json(json)
# print the JSON string representation of the object
print(DefaultResponseDTOOfStatusDTOResult.to_json())

# convert the object into a dict
default_response_dtoof_status_dto_result_dict = default_response_dtoof_status_dto_result_instance.to_dict()
# create an instance of DefaultResponseDTOOfStatusDTOResult from a dict
default_response_dtoof_status_dto_result_from_dict = DefaultResponseDTOOfStatusDTOResult.from_dict(default_response_dtoof_status_dto_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


