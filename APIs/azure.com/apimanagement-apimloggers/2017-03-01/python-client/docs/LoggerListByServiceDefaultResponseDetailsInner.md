# LoggerListByServiceDefaultResponseDetailsInner

Error Field contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Property level error code. | [optional] 
**message** | **str** | Human-readable representation of property-level error. | [optional] 
**target** | **str** | Property name. | [optional] 

## Example

```python
from openapi_client.models.logger_list_by_service_default_response_details_inner import LoggerListByServiceDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerListByServiceDefaultResponseDetailsInner from a JSON string
logger_list_by_service_default_response_details_inner_instance = LoggerListByServiceDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(LoggerListByServiceDefaultResponseDetailsInner.to_json())

# convert the object into a dict
logger_list_by_service_default_response_details_inner_dict = logger_list_by_service_default_response_details_inner_instance.to_dict()
# create an instance of LoggerListByServiceDefaultResponseDetailsInner from a dict
logger_list_by_service_default_response_details_inner_from_dict = LoggerListByServiceDefaultResponseDetailsInner.from_dict(logger_list_by_service_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


