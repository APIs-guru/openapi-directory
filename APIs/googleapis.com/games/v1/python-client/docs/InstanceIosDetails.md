# InstanceIosDetails

The iOS details resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_identifier** | **str** | Bundle identifier. | [optional] 
**itunes_app_id** | **str** | iTunes App ID. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#instanceIosDetails&#x60;. | [optional] 
**preferred_for_ipad** | **bool** | Indicates that this instance is the default for new installations on iPad devices. | [optional] 
**preferred_for_iphone** | **bool** | Indicates that this instance is the default for new installations on iPhone devices. | [optional] 
**support_ipad** | **bool** | Flag to indicate if this instance supports iPad. | [optional] 
**support_iphone** | **bool** | Flag to indicate if this instance supports iPhone. | [optional] 

## Example

```python
from openapi_client.models.instance_ios_details import InstanceIosDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceIosDetails from a JSON string
instance_ios_details_instance = InstanceIosDetails.from_json(json)
# print the JSON string representation of the object
print(InstanceIosDetails.to_json())

# convert the object into a dict
instance_ios_details_dict = instance_ios_details_instance.to_dict()
# create an instance of InstanceIosDetails from a dict
instance_ios_details_from_dict = InstanceIosDetails.from_dict(instance_ios_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


