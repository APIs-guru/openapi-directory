# DeviceFeatureTargeting

Targeting for a device feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_feature** | [**DeviceFeature**](DeviceFeature.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_feature_targeting import DeviceFeatureTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFeatureTargeting from a JSON string
device_feature_targeting_instance = DeviceFeatureTargeting.from_json(json)
# print the JSON string representation of the object
print(DeviceFeatureTargeting.to_json())

# convert the object into a dict
device_feature_targeting_dict = device_feature_targeting_instance.to_dict()
# create an instance of DeviceFeatureTargeting from a dict
device_feature_targeting_from_dict = DeviceFeatureTargeting.from_dict(device_feature_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


