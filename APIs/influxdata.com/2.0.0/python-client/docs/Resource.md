# Resource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | If ID is set that is a permission for a specific resource. if it is not set it is a permission for all resources of that resource type. | [optional] 
**name** | **str** | Optional name of the resource if the resource has a name field. | [optional] 
**org** | **str** | Optional name of the organization of the organization with orgID. | [optional] 
**org_id** | **str** | If orgID is set that is a permission for all resources owned my that org. if it is not set it is a permission for all resources of that resource type. | [optional] 
**type** | **str** |  | 

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


