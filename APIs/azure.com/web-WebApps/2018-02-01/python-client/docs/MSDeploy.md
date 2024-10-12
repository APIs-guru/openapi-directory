# MSDeploy

MSDeploy ARM PUT information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MSDeployCore**](MSDeployCore.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ms_deploy import MSDeploy

# TODO update the JSON string below
json = "{}"
# create an instance of MSDeploy from a JSON string
ms_deploy_instance = MSDeploy.from_json(json)
# print the JSON string representation of the object
print(MSDeploy.to_json())

# convert the object into a dict
ms_deploy_dict = ms_deploy_instance.to_dict()
# create an instance of MSDeploy from a dict
ms_deploy_from_dict = MSDeploy.from_dict(ms_deploy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


