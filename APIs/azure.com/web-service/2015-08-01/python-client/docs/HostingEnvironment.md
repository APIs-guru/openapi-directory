# HostingEnvironment

Description of an hostingEnvironment (App Service Environment)

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
from openapi_client.models.hosting_environment import HostingEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of HostingEnvironment from a JSON string
hosting_environment_instance = HostingEnvironment.from_json(json)
# print the JSON string representation of the object
print(HostingEnvironment.to_json())

# convert the object into a dict
hosting_environment_dict = hosting_environment_instance.to_dict()
# create an instance of HostingEnvironment from a dict
hosting_environment_from_dict = HostingEnvironment.from_dict(hosting_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


