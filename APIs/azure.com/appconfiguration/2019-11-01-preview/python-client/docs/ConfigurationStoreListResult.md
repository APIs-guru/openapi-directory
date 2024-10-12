# ConfigurationStoreListResult

The result of a request to list configuration stores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI that can be used to request the next set of paged results. | [optional] 
**value** | [**List[ConfigurationStore]**](ConfigurationStore.md) | The collection value. | [optional] 

## Example

```python
from openapi_client.models.configuration_store_list_result import ConfigurationStoreListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationStoreListResult from a JSON string
configuration_store_list_result_instance = ConfigurationStoreListResult.from_json(json)
# print the JSON string representation of the object
print(ConfigurationStoreListResult.to_json())

# convert the object into a dict
configuration_store_list_result_dict = configuration_store_list_result_instance.to_dict()
# create an instance of ConfigurationStoreListResult from a dict
configuration_store_list_result_from_dict = ConfigurationStoreListResult.from_dict(configuration_store_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


