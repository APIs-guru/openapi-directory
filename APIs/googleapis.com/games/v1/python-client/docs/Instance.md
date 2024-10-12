# Instance

The Instance resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquisition_uri** | **str** | URI which shows where a user can acquire this instance. | [optional] 
**android_instance** | [**InstanceAndroidDetails**](InstanceAndroidDetails.md) |  | [optional] 
**ios_instance** | [**InstanceIosDetails**](InstanceIosDetails.md) |  | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#instance&#x60;. | [optional] 
**name** | **str** | Localized display name. | [optional] 
**platform_type** | **str** | The platform type. | [optional] 
**realtime_play** | **bool** | Flag to show if this game instance supports realtime play. | [optional] 
**turn_based_play** | **bool** | Flag to show if this game instance supports turn based play. | [optional] 
**web_instance** | [**InstanceWebDetails**](InstanceWebDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


