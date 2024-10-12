# InstanceAndroidDetails

The Android instance details resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_piracy_check** | **bool** | Flag indicating whether the anti-piracy check is enabled. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#instanceAndroidDetails&#x60;. | [optional] 
**package_name** | **str** | Android package name which maps to Google Play URL. | [optional] 
**preferred** | **bool** | Indicates that this instance is the default for new installations. | [optional] 

## Example

```python
from openapi_client.models.instance_android_details import InstanceAndroidDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceAndroidDetails from a JSON string
instance_android_details_instance = InstanceAndroidDetails.from_json(json)
# print the JSON string representation of the object
print(InstanceAndroidDetails.to_json())

# convert the object into a dict
instance_android_details_dict = instance_android_details_instance.to_dict()
# create an instance of InstanceAndroidDetails from a dict
instance_android_details_from_dict = InstanceAndroidDetails.from_dict(instance_android_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


