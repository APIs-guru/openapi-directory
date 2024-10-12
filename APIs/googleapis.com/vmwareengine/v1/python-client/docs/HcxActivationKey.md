# HcxActivationKey

HCX activation key. A default key is created during private cloud provisioning, but this behavior is subject to change and you should always verify active keys. Use VmwareEngine.ListHcxActivationKeys to retrieve existing keys and VmwareEngine.CreateHcxActivationKey to create new ones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_key** | **str** | Output only. HCX activation key. | [optional] [readonly] 
**create_time** | **str** | Output only. Creation time of HCX activation key. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of this HcxActivationKey. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key&#x60; | [optional] [readonly] 
**state** | **str** | Output only. State of HCX activation key. | [optional] [readonly] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.hcx_activation_key import HcxActivationKey

# TODO update the JSON string below
json = "{}"
# create an instance of HcxActivationKey from a JSON string
hcx_activation_key_instance = HcxActivationKey.from_json(json)
# print the JSON string representation of the object
print(HcxActivationKey.to_json())

# convert the object into a dict
hcx_activation_key_dict = hcx_activation_key_instance.to_dict()
# create an instance of HcxActivationKey from a dict
hcx_activation_key_from_dict = HcxActivationKey.from_dict(hcx_activation_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


