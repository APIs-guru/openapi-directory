# ManagedHostingEnvironment

Description of a managed hosting environment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.managed_hosting_environment import ManagedHostingEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedHostingEnvironment from a JSON string
managed_hosting_environment_instance = ManagedHostingEnvironment.from_json(json)
# print the JSON string representation of the object
print(ManagedHostingEnvironment.to_json())

# convert the object into a dict
managed_hosting_environment_dict = managed_hosting_environment_instance.to_dict()
# create an instance of ManagedHostingEnvironment from a dict
managed_hosting_environment_from_dict = ManagedHostingEnvironment.from_dict(managed_hosting_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


