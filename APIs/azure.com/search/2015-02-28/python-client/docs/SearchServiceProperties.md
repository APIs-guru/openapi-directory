# SearchServiceProperties

Defines properties of an Azure Search service that can be modified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_count** | **int** | The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. | [optional] 
**replica_count** | **int** | The number of replicas in the Search service. If specified, it must be a value between 1 and 6 inclusive. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_service_properties import SearchServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SearchServiceProperties from a JSON string
search_service_properties_instance = SearchServiceProperties.from_json(json)
# print the JSON string representation of the object
print(SearchServiceProperties.to_json())

# convert the object into a dict
search_service_properties_dict = search_service_properties_instance.to_dict()
# create an instance of SearchServiceProperties from a dict
search_service_properties_from_dict = SearchServiceProperties.from_dict(search_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


