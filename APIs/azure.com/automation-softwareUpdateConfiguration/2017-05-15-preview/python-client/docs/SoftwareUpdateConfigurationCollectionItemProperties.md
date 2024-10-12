# SoftwareUpdateConfigurationCollectionItemProperties

Software update configuration collection item properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Creation time of the software update configuration, which only appears in the response. | [optional] [readonly] 
**frequency** | **str** | Gets or sets the frequency of the schedule. | [optional] 
**last_modified_time** | **datetime** | Last time software update configuration was modified, which only appears in the response. | [optional] [readonly] 
**next_run** | **datetime** | ext run time of the update. | [optional] 
**provisioning_state** | **str** | Provisioning state for the software update configuration, which only appears in the response. | [optional] [readonly] 
**start_time** | **datetime** | the start time of the update. | [optional] 
**update_configuration** | [**CollectionItemUpdateConfiguration**](CollectionItemUpdateConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_collection_item_properties import SoftwareUpdateConfigurationCollectionItemProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationCollectionItemProperties from a JSON string
software_update_configuration_collection_item_properties_instance = SoftwareUpdateConfigurationCollectionItemProperties.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationCollectionItemProperties.to_json())

# convert the object into a dict
software_update_configuration_collection_item_properties_dict = software_update_configuration_collection_item_properties_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationCollectionItemProperties from a dict
software_update_configuration_collection_item_properties_from_dict = SoftwareUpdateConfigurationCollectionItemProperties.from_dict(software_update_configuration_collection_item_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


