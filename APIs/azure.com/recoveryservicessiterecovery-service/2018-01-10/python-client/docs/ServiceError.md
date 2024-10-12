# ServiceError

ASR error model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **str** | Activity Id. | [optional] 
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**possible_causes** | **str** | Possible causes of error. | [optional] 
**recommended_action** | **str** | Recommended action to resolve error. | [optional] 

## Example

```python
from openapi_client.models.service_error import ServiceError

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceError from a JSON string
service_error_instance = ServiceError.from_json(json)
# print the JSON string representation of the object
print(ServiceError.to_json())

# convert the object into a dict
service_error_dict = service_error_instance.to_dict()
# create an instance of ServiceError from a dict
service_error_from_dict = ServiceError.from_dict(service_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


