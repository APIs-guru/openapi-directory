# DeviceFeature

Represents a device feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **str** | Name of the feature. | [optional] 
**feature_version** | **int** | The feature version specified by android:glEsVersion or android:version in in the AndroidManifest. | [optional] 

## Example

```python
from openapi_client.models.device_feature import DeviceFeature

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFeature from a JSON string
device_feature_instance = DeviceFeature.from_json(json)
# print the JSON string representation of the object
print(DeviceFeature.to_json())

# convert the object into a dict
device_feature_dict = device_feature_instance.to_dict()
# create an instance of DeviceFeature from a dict
device_feature_from_dict = DeviceFeature.from_dict(device_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


