# DedicatedCloudService

Dedicated cloud service model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudServices/{dedicatedCloudServiceName} | [optional] [readonly] 
**location** | **str** | Azure region | 
**name** | **str** | {dedicatedCloudServiceName} | [optional] [readonly] 
**properties** | [**DedicatedCloudServiceProperties**](DedicatedCloudServiceProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags model | [optional] 
**type** | **str** | {resourceProviderNamespace}/{resourceType} | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_cloud_service import DedicatedCloudService

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCloudService from a JSON string
dedicated_cloud_service_instance = DedicatedCloudService.from_json(json)
# print the JSON string representation of the object
print(DedicatedCloudService.to_json())

# convert the object into a dict
dedicated_cloud_service_dict = dedicated_cloud_service_instance.to_dict()
# create an instance of DedicatedCloudService from a dict
dedicated_cloud_service_from_dict = DedicatedCloudService.from_dict(dedicated_cloud_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


