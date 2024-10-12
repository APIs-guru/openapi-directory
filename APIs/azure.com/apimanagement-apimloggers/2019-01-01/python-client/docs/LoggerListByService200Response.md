# LoggerListByService200Response

Paged Logger list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[LoggerListByService200ResponseValueInner]**](LoggerListByService200ResponseValueInner.md) | Logger values. | [optional] 

## Example

```python
from openapi_client.models.logger_list_by_service200_response import LoggerListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerListByService200Response from a JSON string
logger_list_by_service200_response_instance = LoggerListByService200Response.from_json(json)
# print the JSON string representation of the object
print(LoggerListByService200Response.to_json())

# convert the object into a dict
logger_list_by_service200_response_dict = logger_list_by_service200_response_instance.to_dict()
# create an instance of LoggerListByService200Response from a dict
logger_list_by_service200_response_from_dict = LoggerListByService200Response.from_dict(logger_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


