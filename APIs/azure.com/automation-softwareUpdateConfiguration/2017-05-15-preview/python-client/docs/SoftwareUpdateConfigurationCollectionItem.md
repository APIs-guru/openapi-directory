# SoftwareUpdateConfigurationCollectionItem

Software update configuration collection item properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id of the software update configuration | [optional] [readonly] 
**name** | **str** | Name of the software update configuration. | [optional] [readonly] 
**properties** | [**SoftwareUpdateConfigurationCollectionItemProperties**](SoftwareUpdateConfigurationCollectionItemProperties.md) |  | 

## Example

```python
from openapi_client.models.software_update_configuration_collection_item import SoftwareUpdateConfigurationCollectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationCollectionItem from a JSON string
software_update_configuration_collection_item_instance = SoftwareUpdateConfigurationCollectionItem.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationCollectionItem.to_json())

# convert the object into a dict
software_update_configuration_collection_item_dict = software_update_configuration_collection_item_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationCollectionItem from a dict
software_update_configuration_collection_item_from_dict = SoftwareUpdateConfigurationCollectionItem.from_dict(software_update_configuration_collection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


