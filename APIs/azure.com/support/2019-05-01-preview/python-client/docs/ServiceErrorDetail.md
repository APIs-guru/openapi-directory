# ServiceErrorDetail

The error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] [readonly] 
**target** | **str** | The target of the error. | [optional] 

## Example

```python
from openapi_client.models.service_error_detail import ServiceErrorDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceErrorDetail from a JSON string
service_error_detail_instance = ServiceErrorDetail.from_json(json)
# print the JSON string representation of the object
print(ServiceErrorDetail.to_json())

# convert the object into a dict
service_error_detail_dict = service_error_detail_instance.to_dict()
# create an instance of ServiceErrorDetail from a dict
service_error_detail_from_dict = ServiceErrorDetail.from_dict(service_error_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


