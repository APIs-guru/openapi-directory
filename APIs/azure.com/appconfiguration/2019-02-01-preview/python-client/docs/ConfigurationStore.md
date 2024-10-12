# ConfigurationStore

The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConfigurationStoreProperties**](ConfigurationStoreProperties.md) |  | [optional] 
**id** | **str** | The resource ID. | [optional] [readonly] 
**location** | **str** | The location of the resource. This cannot be changed after the resource is created. | 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_store import ConfigurationStore

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationStore from a JSON string
configuration_store_instance = ConfigurationStore.from_json(json)
# print the JSON string representation of the object
print(ConfigurationStore.to_json())

# convert the object into a dict
configuration_store_dict = configuration_store_instance.to_dict()
# create an instance of ConfigurationStore from a dict
configuration_store_from_dict = ConfigurationStore.from_dict(configuration_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


