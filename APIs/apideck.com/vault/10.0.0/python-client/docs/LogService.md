# LogService

Apideck service provider associated with request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Apideck service provider id. | 
**name** | **str** | Apideck service provider name. | 

## Example

```python
from openapi_client.models.log_service import LogService

# TODO update the JSON string below
json = "{}"
# create an instance of LogService from a JSON string
log_service_instance = LogService.from_json(json)
# print the JSON string representation of the object
print(LogService.to_json())

# convert the object into a dict
log_service_dict = log_service_instance.to_dict()
# create an instance of LogService from a dict
log_service_from_dict = LogService.from_dict(log_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


