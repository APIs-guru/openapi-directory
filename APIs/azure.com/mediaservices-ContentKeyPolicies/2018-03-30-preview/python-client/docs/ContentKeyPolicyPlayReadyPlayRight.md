# ContentKeyPolicyPlayReadyPlayRight

Configures the Play Right in the PlayReady license.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agc_and_color_stripe_restriction** | **int** | Configures Automatic Gain Control (AGC) and Color Stripe in the license. Must be between 0 and 3 inclusive. | [optional] 
**allow_passing_video_content_to_unknown_output** | **str** | Configures Unknown output handling settings of the license. | 
**analog_video_opl** | **int** | Specifies the output protection level for compressed digital audio. | [optional] 
**compressed_digital_audio_opl** | **int** | Specifies the output protection level for compressed digital audio. | [optional] 
**compressed_digital_video_opl** | **int** | Specifies the output protection level for compressed digital video. | [optional] 
**digital_video_only_content_restriction** | **bool** | Enables the Image Constraint For Analog Component Video Restriction in the license. | 
**explicit_analog_television_output_restriction** | [**ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction**](ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction.md) |  | [optional] 
**first_play_expiration** | **str** | The amount of time that the license is valid after the license is first used to play content. | [optional] 
**image_constraint_for_analog_component_video_restriction** | **bool** | Enables the Image Constraint For Analog Component Video Restriction in the license. | 
**image_constraint_for_analog_computer_monitor_restriction** | **bool** | Enables the Image Constraint For Analog Component Video Restriction in the license. | 
**scms_restriction** | **int** | Configures the Serial Copy Management System (SCMS) in the license. Must be between 0 and 3 inclusive. | [optional] 
**uncompressed_digital_audio_opl** | **int** | Specifies the output protection level for uncompressed digital audio. | [optional] 
**uncompressed_digital_video_opl** | **int** | Specifies the output protection level for uncompressed digital video. | [optional] 

## Example

```python
from openapi_client.models.content_key_policy_play_ready_play_right import ContentKeyPolicyPlayReadyPlayRight

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyPlayReadyPlayRight from a JSON string
content_key_policy_play_ready_play_right_instance = ContentKeyPolicyPlayReadyPlayRight.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyPlayReadyPlayRight.to_json())

# convert the object into a dict
content_key_policy_play_ready_play_right_dict = content_key_policy_play_ready_play_right_instance.to_dict()
# create an instance of ContentKeyPolicyPlayReadyPlayRight from a dict
content_key_policy_play_ready_play_right_from_dict = ContentKeyPolicyPlayReadyPlayRight.from_dict(content_key_policy_play_ready_play_right_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


