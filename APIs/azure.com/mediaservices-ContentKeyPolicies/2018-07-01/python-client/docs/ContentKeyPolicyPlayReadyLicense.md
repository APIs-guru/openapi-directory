# ContentKeyPolicyPlayReadyLicense

The PlayReady license

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_test_devices** | **bool** | A flag indicating whether test devices can use the license. | 
**begin_date** | **datetime** | The begin date of license | [optional] 
**content_key_location** | [**ContentKeyPolicyPlayReadyContentKeyLocation**](ContentKeyPolicyPlayReadyContentKeyLocation.md) |  | 
**content_type** | **str** | The PlayReady content type. | 
**expiration_date** | **datetime** | The expiration date of license. | [optional] 
**grace_period** | **str** | The grace period of license. | [optional] 
**license_type** | **str** | The license type. | 
**play_right** | [**ContentKeyPolicyPlayReadyPlayRight**](ContentKeyPolicyPlayReadyPlayRight.md) |  | [optional] 
**relative_begin_date** | **str** | The relative begin date of license. | [optional] 
**relative_expiration_date** | **str** | The relative expiration date of license. | [optional] 

## Example

```python
from openapi_client.models.content_key_policy_play_ready_license import ContentKeyPolicyPlayReadyLicense

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyPlayReadyLicense from a JSON string
content_key_policy_play_ready_license_instance = ContentKeyPolicyPlayReadyLicense.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyPlayReadyLicense.to_json())

# convert the object into a dict
content_key_policy_play_ready_license_dict = content_key_policy_play_ready_license_instance.to_dict()
# create an instance of ContentKeyPolicyPlayReadyLicense from a dict
content_key_policy_play_ready_license_from_dict = ContentKeyPolicyPlayReadyLicense.from_dict(content_key_policy_play_ready_license_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


