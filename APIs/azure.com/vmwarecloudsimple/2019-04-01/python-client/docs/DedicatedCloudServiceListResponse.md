# DedicatedCloudServiceListResponse

List of dedicated cloud services

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of DedicatedCloudNode | [optional] 
**value** | [**List[DedicatedCloudService]**](DedicatedCloudService.md) | Results of the DedicatedCloudService list | [optional] 

## Example

```python
from openapi_client.models.dedicated_cloud_service_list_response import DedicatedCloudServiceListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCloudServiceListResponse from a JSON string
dedicated_cloud_service_list_response_instance = DedicatedCloudServiceListResponse.from_json(json)
# print the JSON string representation of the object
print(DedicatedCloudServiceListResponse.to_json())

# convert the object into a dict
dedicated_cloud_service_list_response_dict = dedicated_cloud_service_list_response_instance.to_dict()
# create an instance of DedicatedCloudServiceListResponse from a dict
dedicated_cloud_service_list_response_from_dict = DedicatedCloudServiceListResponse.from_dict(dedicated_cloud_service_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


