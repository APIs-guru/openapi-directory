# ContainerService

Container service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ContainerServiceProperties**](ContainerServiceProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_service import ContainerService

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerService from a JSON string
container_service_instance = ContainerService.from_json(json)
# print the JSON string representation of the object
print(ContainerService.to_json())

# convert the object into a dict
container_service_dict = container_service_instance.to_dict()
# create an instance of ContainerService from a dict
container_service_from_dict = ContainerService.from_dict(container_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


