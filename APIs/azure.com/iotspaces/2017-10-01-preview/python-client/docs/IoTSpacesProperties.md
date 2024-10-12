# IoTSpacesProperties

The properties of an IoTSpaces instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**management_api_url** | **str** | The management Api endpoint. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**storage_container** | [**StorageContainerProperties**](StorageContainerProperties.md) |  | [optional] 
**web_portal_url** | **str** | The management UI endpoint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.io_t_spaces_properties import IoTSpacesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IoTSpacesProperties from a JSON string
io_t_spaces_properties_instance = IoTSpacesProperties.from_json(json)
# print the JSON string representation of the object
print(IoTSpacesProperties.to_json())

# convert the object into a dict
io_t_spaces_properties_dict = io_t_spaces_properties_instance.to_dict()
# create an instance of IoTSpacesProperties from a dict
io_t_spaces_properties_from_dict = IoTSpacesProperties.from_dict(io_t_spaces_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


