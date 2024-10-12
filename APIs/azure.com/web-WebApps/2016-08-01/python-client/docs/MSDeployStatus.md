# MSDeployStatus

MSDeploy ARM response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | MSDeployStatus resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ms_deploy_status import MSDeployStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MSDeployStatus from a JSON string
ms_deploy_status_instance = MSDeployStatus.from_json(json)
# print the JSON string representation of the object
print(MSDeployStatus.to_json())

# convert the object into a dict
ms_deploy_status_dict = ms_deploy_status_instance.to_dict()
# create an instance of MSDeployStatus from a dict
ms_deploy_status_from_dict = MSDeployStatus.from_dict(ms_deploy_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


