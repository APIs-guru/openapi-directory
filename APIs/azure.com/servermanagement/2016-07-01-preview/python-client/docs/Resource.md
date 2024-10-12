# Resource

Resource Manager Resource Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** |  | [optional] 
**id** | **str** | Resource Manager Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Manager Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Manager Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Manager Resource Tags. | [optional] 
**type** | **str** | Resource Manager Resource Type. | [optional] [readonly] 

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


