# Resource

Common properties of an ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id. | [optional] [readonly] 
**location** | **str** | Resource location. | 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


