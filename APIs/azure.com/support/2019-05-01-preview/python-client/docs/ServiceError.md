# ServiceError

The api error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**details** | [**List[ServiceErrorDetail]**](ServiceErrorDetail.md) | The list of error details. | [optional] [readonly] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The target of the error. | [optional] 

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


