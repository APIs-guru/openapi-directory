# Conversion

A Conversion represents when a user successfully performs a desired action after seeing an ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_directed_treatment** | **bool** | Whether this particular request may come from a user under the age of 13, under COPPA compliance. | [optional] 
**custom_variables** | [**List[CustomFloodlightVariable]**](CustomFloodlightVariable.md) | Custom floodlight variables. This field may only be used when calling batchinsert; it is not supported by batchupdate. | [optional] 
**encrypted_user_id** | **str** | The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId and gclid. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid is a required field. | [optional] 
**encrypted_user_id_candidates** | **List[str]** | A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId and gclid. This or encryptedUserId or matchId or mobileDeviceId or gclid is a required field. | [optional] 
**floodlight_activity_id** | **str** | Floodlight Activity ID of this conversion. This is a required field. | [optional] 
**floodlight_configuration_id** | **str** | Floodlight Configuration ID of this conversion. This is a required field. | [optional] 
**gclid** | **str** | The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId and mobileDeviceId. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId is a required field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#conversion\&quot;. | [optional] 
**limit_ad_tracking** | **bool** | Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing. | [optional] 
**match_id** | **str** | The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or mobileDeviceId or gclid is a required field. | [optional] 
**mobile_device_id** | **str** | The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid is a required field. | [optional] 
**non_personalized_ad** | **bool** | Whether the conversion was for a non personalized ad. | [optional] 
**ordinal** | **str** | The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field. | [optional] 
**quantity** | **str** | The quantity of the conversion. | [optional] 
**timestamp_micros** | **str** | The timestamp of conversion, in Unix epoch micros. This is a required field. | [optional] 
**treatment_for_underage** | **bool** | Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union&#39;s General Data Protection Regulation (GDPR). | [optional] 
**value** | **float** | The value of the conversion. | [optional] 

## Example

```python
from openapi_client.models.conversion import Conversion

# TODO update the JSON string below
json = "{}"
# create an instance of Conversion from a JSON string
conversion_instance = Conversion.from_json(json)
# print the JSON string representation of the object
print(Conversion.to_json())

# convert the object into a dict
conversion_dict = conversion_instance.to_dict()
# create an instance of Conversion from a dict
conversion_from_dict = Conversion.from_dict(conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


