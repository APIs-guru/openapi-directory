# CollectionItemUpdateConfiguration

object returned when requesting a collection of software update configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_virtual_machines** | **List[str]** | List of azure resource Ids for azure virtual machines targeted by the software update configuration. | [optional] 
**duration** | **str** | Maximum time allowed for the software update configuration run. Duration needs to be specified using the format PT[n]H[n]M[n]S as per ISO8601 | [optional] 

## Example

```python
from openapi_client.models.collection_item_update_configuration import CollectionItemUpdateConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionItemUpdateConfiguration from a JSON string
collection_item_update_configuration_instance = CollectionItemUpdateConfiguration.from_json(json)
# print the JSON string representation of the object
print(CollectionItemUpdateConfiguration.to_json())

# convert the object into a dict
collection_item_update_configuration_dict = collection_item_update_configuration_instance.to_dict()
# create an instance of CollectionItemUpdateConfiguration from a dict
collection_item_update_configuration_from_dict = CollectionItemUpdateConfiguration.from_dict(collection_item_update_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


