# GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo

ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Required. Unique Id for the resource. | [optional] 
**resource** | **Dict[str, object]** | Specific details for the resource. This is for internal use only. | [optional] 
**status** | **str** | Overall health status. Overall status is derived based on the status of each sub level resources. | [optional] 
**sub** | [**List[GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo]**](GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo.md) | List of Info for the sub level resources. | [optional] 
**time** | **str** | The timestamp to collect the info. It is suggested to be set by the topmost level resource only. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1alpha_resource_info import GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo from a JSON string
google_cloud_beyondcorp_appconnectors_v1alpha_resource_info_instance = GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1alpha_resource_info_dict = google_cloud_beyondcorp_appconnectors_v1alpha_resource_info_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo from a dict
google_cloud_beyondcorp_appconnectors_v1alpha_resource_info_from_dict = GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo.from_dict(google_cloud_beyondcorp_appconnectors_v1alpha_resource_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


