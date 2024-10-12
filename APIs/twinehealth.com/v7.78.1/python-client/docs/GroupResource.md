# GroupResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**GroupResourceAttributes**](GroupResourceAttributes.md) |  | 
**id** | **str** |  | 
**links** | [**GroupResourceLinks**](GroupResourceLinks.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.group_resource import GroupResource

# TODO update the JSON string below
json = "{}"
# create an instance of GroupResource from a JSON string
group_resource_instance = GroupResource.from_json(json)
# print the JSON string representation of the object
print(GroupResource.to_json())

# convert the object into a dict
group_resource_dict = group_resource_instance.to_dict()
# create an instance of GroupResource from a dict
group_resource_from_dict = GroupResource.from_dict(group_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


