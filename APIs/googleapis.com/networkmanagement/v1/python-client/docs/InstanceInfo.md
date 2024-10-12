# InstanceInfo

For display only. Metadata associated with a Compute Engine instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Compute Engine instance. | [optional] 
**external_ip** | **str** | External IP address of the network interface. | [optional] 
**interface** | **str** | Name of the network interface of a Compute Engine instance. | [optional] 
**internal_ip** | **str** | Internal IP address of the network interface. | [optional] 
**network_tags** | **List[str]** | Network tags configured on the instance. | [optional] 
**network_uri** | **str** | URI of a Compute Engine network. | [optional] 
**service_account** | **str** | Service account authorized for the instance. | [optional] 
**uri** | **str** | URI of a Compute Engine instance. | [optional] 

## Example

```python
from openapi_client.models.instance_info import InstanceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceInfo from a JSON string
instance_info_instance = InstanceInfo.from_json(json)
# print the JSON string representation of the object
print(InstanceInfo.to_json())

# convert the object into a dict
instance_info_dict = instance_info_instance.to_dict()
# create an instance of InstanceInfo from a dict
instance_info_from_dict = InstanceInfo.from_dict(instance_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


