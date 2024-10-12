# FirstAndThirdPartyAudience

Describes a first or third party audience list used for targeting. First party audiences are created via usage of client data. Third party audiences are provided by Third Party data providers and can only be licensed to customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_display_audience_size** | **str** | Output only. The estimated audience size for the Display network in the past month. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. | [optional] [readonly] 
**app_id** | **str** | The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type &#x60;CUSTOMER_MATCH_DEVICE_ID&#x60; | [optional] 
**audience_source** | **str** | Output only. The source of the audience. | [optional] [readonly] 
**audience_type** | **str** | The type of the audience. | [optional] 
**contact_info_list** | [**ContactInfoList**](ContactInfoList.md) |  | [optional] 
**description** | **str** | The user-provided description of the audience. Only applicable to first party audiences. | [optional] 
**display_audience_size** | **str** | Output only. The estimated audience size for the Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. | [optional] [readonly] 
**display_desktop_audience_size** | **str** | Output only. The estimated desktop audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. | [optional] [readonly] 
**display_mobile_app_audience_size** | **str** | Output only. The estimated mobile app audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. | [optional] [readonly] 
**display_mobile_web_audience_size** | **str** | Output only. The estimated mobile web audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. | [optional] [readonly] 
**display_name** | **str** | The display name of the first and third party audience. | [optional] 
**first_and_third_party_audience_id** | **str** | Output only. The unique ID of the first and third party audience. Assigned by the system. | [optional] [readonly] 
**first_and_third_party_audience_type** | **str** | Whether the audience is a first or third party audience. | [optional] 
**gmail_audience_size** | **str** | Output only. The estimated audience size for Gmail network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. | [optional] [readonly] 
**membership_duration_days** | **str** | The duration in days that an entry remains in the audience after the qualifying event. If the audience has no expiration, set the value of this field to 10000. Otherwise, the set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * &#x60;CUSTOMER_MATCH_CONTACT_INFO&#x60; * &#x60;CUSTOMER_MATCH_DEVICE_ID&#x60; | [optional] 
**mobile_device_id_list** | [**MobileDeviceIdList**](MobileDeviceIdList.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the first and third party audience. | [optional] [readonly] 
**youtube_audience_size** | **str** | Output only. The estimated audience size for YouTube network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. | [optional] [readonly] 

## Example

```python
from openapi_client.models.first_and_third_party_audience import FirstAndThirdPartyAudience

# TODO update the JSON string below
json = "{}"
# create an instance of FirstAndThirdPartyAudience from a JSON string
first_and_third_party_audience_instance = FirstAndThirdPartyAudience.from_json(json)
# print the JSON string representation of the object
print(FirstAndThirdPartyAudience.to_json())

# convert the object into a dict
first_and_third_party_audience_dict = first_and_third_party_audience_instance.to_dict()
# create an instance of FirstAndThirdPartyAudience from a dict
first_and_third_party_audience_from_dict = FirstAndThirdPartyAudience.from_dict(first_and_third_party_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


