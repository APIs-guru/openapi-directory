# GoogleCloudApigeeV1DebugMask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_json_paths** | **List[str]** | List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows. | [optional] 
**fault_x_paths** | **List[str]** | List of XPaths that specify the XML elements to be filtered from XML payloads in error flows. | [optional] 
**name** | **str** | Name of the debug mask. | [optional] 
**namespaces** | **Dict[str, str]** | Map of namespaces to URIs. | [optional] 
**request_json_paths** | **List[str]** | List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads. | [optional] 
**request_x_paths** | **List[str]** | List of XPaths that specify the XML elements to be filtered from XML request message payloads. | [optional] 
**response_json_paths** | **List[str]** | List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads. | [optional] 
**response_x_paths** | **List[str]** | List of XPaths that specify the XML elements to be filtered from XML response message payloads. | [optional] 
**variables** | **List[str]** | List of variables that should be masked from the debug output. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_debug_mask import GoogleCloudApigeeV1DebugMask

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DebugMask from a JSON string
google_cloud_apigee_v1_debug_mask_instance = GoogleCloudApigeeV1DebugMask.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DebugMask.to_json())

# convert the object into a dict
google_cloud_apigee_v1_debug_mask_dict = google_cloud_apigee_v1_debug_mask_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DebugMask from a dict
google_cloud_apigee_v1_debug_mask_from_dict = GoogleCloudApigeeV1DebugMask.from_dict(google_cloud_apigee_v1_debug_mask_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


