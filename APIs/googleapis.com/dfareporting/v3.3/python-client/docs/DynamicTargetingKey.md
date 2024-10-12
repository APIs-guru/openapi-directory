# DynamicTargetingKey

Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#dynamicTargetingKey\&quot;. | [optional] 
**name** | **str** | Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase. | [optional] 
**object_id** | **str** | ID of the object of this dynamic targeting key. This is a required field. | [optional] 
**object_type** | **str** | Type of the object of this dynamic targeting key. This is a required field. | [optional] 

## Example

```python
from openapi_client.models.dynamic_targeting_key import DynamicTargetingKey

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicTargetingKey from a JSON string
dynamic_targeting_key_instance = DynamicTargetingKey.from_json(json)
# print the JSON string representation of the object
print(DynamicTargetingKey.to_json())

# convert the object into a dict
dynamic_targeting_key_dict = dynamic_targeting_key_instance.to_dict()
# create an instance of DynamicTargetingKey from a dict
dynamic_targeting_key_from_dict = DynamicTargetingKey.from_dict(dynamic_targeting_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


