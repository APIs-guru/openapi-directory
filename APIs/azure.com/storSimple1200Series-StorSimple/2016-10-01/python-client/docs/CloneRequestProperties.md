# CloneRequestProperties

Properties of CloneRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk** | [**ISCSIDisk**](ISCSIDisk.md) |  | [optional] 
**new_endpoint_name** | **str** | Name of new endpoint which will created as part of clone job. | 
**share** | [**FileShare**](FileShare.md) |  | [optional] 
**target_access_point_id** | **str** | Access point Id on which clone job will performed. | 
**target_device_id** | **str** | DeviceId of the device which will act as the Clone target | 

## Example

```python
from openapi_client.models.clone_request_properties import CloneRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloneRequestProperties from a JSON string
clone_request_properties_instance = CloneRequestProperties.from_json(json)
# print the JSON string representation of the object
print(CloneRequestProperties.to_json())

# convert the object into a dict
clone_request_properties_dict = clone_request_properties_instance.to_dict()
# create an instance of CloneRequestProperties from a dict
clone_request_properties_from_dict = CloneRequestProperties.from_dict(clone_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


