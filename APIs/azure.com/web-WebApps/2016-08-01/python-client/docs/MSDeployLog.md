# MSDeployLog

MSDeploy log

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | MSDeployLog resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ms_deploy_log import MSDeployLog

# TODO update the JSON string below
json = "{}"
# create an instance of MSDeployLog from a JSON string
ms_deploy_log_instance = MSDeployLog.from_json(json)
# print the JSON string representation of the object
print(MSDeployLog.to_json())

# convert the object into a dict
ms_deploy_log_dict = ms_deploy_log_instance.to_dict()
# create an instance of MSDeployLog from a dict
ms_deploy_log_from_dict = MSDeployLog.from_dict(ms_deploy_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


