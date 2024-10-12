# GoogleAppsCloudidentityDevicesV1ClientState

Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_tags** | **List[str]** | The caller can specify asset tags for this resource | [optional] 
**compliance_state** | **str** | The compliance state of the resource as specified by the API client. | [optional] 
**create_time** | **str** | Output only. The time the client state data was created. | [optional] [readonly] 
**custom_id** | **str** | This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field. | [optional] 
**etag** | **str** | The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest | [optional] 
**health_score** | **str** | The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies. | [optional] 
**key_value_pairs** | [**Dict[str, GoogleAppsCloudidentityDevicesV1CustomAttributeValue]**](GoogleAppsCloudidentityDevicesV1CustomAttributeValue.md) | The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map. | [optional] 
**last_update_time** | **str** | Output only. The time the client state data was last updated. | [optional] [readonly] 
**managed** | **str** | The management state of the resource as specified by the API client. | [optional] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: &#x60;devices/{device}/deviceUsers/{device_user}/clientState/{partner}&#x60;, where partner corresponds to the partner storing the data. For partners belonging to the \&quot;BeyondCorp Alliance\&quot;, this is the partner ID specified to you by Google. For all other callers, this is a string of the form: &#x60;{customer}-suffix&#x60;, where &#x60;customer&#x60; is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization&#39;s customer ID can be obtained from the URL: &#x60;GET https://www.googleapis.com/admin/directory/v1/customers/my_customer&#x60; The &#x60;id&#x60; field in the response contains the customer ID starting with the letter &#39;C&#39;. The customer ID to be used in this API is the string after the letter &#39;C&#39; (not including &#39;C&#39;) | [optional] [readonly] 
**owner_type** | **str** | Output only. The owner of the ClientState | [optional] [readonly] 
**score_reason** | **str** | A descriptive cause of the health score. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_client_state import GoogleAppsCloudidentityDevicesV1ClientState

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1ClientState from a JSON string
google_apps_cloudidentity_devices_v1_client_state_instance = GoogleAppsCloudidentityDevicesV1ClientState.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1ClientState.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_client_state_dict = google_apps_cloudidentity_devices_v1_client_state_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1ClientState from a dict
google_apps_cloudidentity_devices_v1_client_state_from_dict = GoogleAppsCloudidentityDevicesV1ClientState.from_dict(google_apps_cloudidentity_devices_v1_client_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


