# Service

Object that represents a Service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**properties** | [**ServiceProperties**](ServiceProperties.md) |  | [optional] 
**type** | **str** | Type of the resource &#39;Microsoft.Support/services&#39; | [optional] [readonly] 

## Example

```python
from openapi_client.models.service import Service

# TODO update the JSON string below
json = "{}"
# create an instance of Service from a JSON string
service_instance = Service.from_json(json)
# print the JSON string representation of the object
print(Service.to_json())

# convert the object into a dict
service_dict = service_instance.to_dict()
# create an instance of Service from a dict
service_from_dict = Service.from_dict(service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


