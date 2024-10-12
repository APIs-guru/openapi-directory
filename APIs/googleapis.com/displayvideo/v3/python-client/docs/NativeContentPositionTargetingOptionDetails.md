# NativeContentPositionTargetingOptionDetails

Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_position** | **str** | Output only. The content position. | [optional] [readonly] 

## Example

```python
from openapi_client.models.native_content_position_targeting_option_details import NativeContentPositionTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of NativeContentPositionTargetingOptionDetails from a JSON string
native_content_position_targeting_option_details_instance = NativeContentPositionTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(NativeContentPositionTargetingOptionDetails.to_json())

# convert the object into a dict
native_content_position_targeting_option_details_dict = native_content_position_targeting_option_details_instance.to_dict()
# create an instance of NativeContentPositionTargetingOptionDetails from a dict
native_content_position_targeting_option_details_from_dict = NativeContentPositionTargetingOptionDetails.from_dict(native_content_position_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


