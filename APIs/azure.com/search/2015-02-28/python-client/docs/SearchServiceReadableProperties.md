# SearchServiceReadableProperties

Defines all the properties of an Azure Search service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_count** | **int** | The number of partitions in the Search service; if specified, it can be 1, 2, 3, 4, 6, or 12. | [optional] 
**provisioning_state** | **str** | The state of the last provisioning operation performed on the Search service. | [optional] [readonly] 
**replica_count** | **int** | The number of replicas in the Search service. If specified, it must be a value between 1 and 6 inclusive. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**status** | **str** | The status of the Search service. | [optional] [readonly] 
**status_details** | **str** | The details of the Search service status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.search_service_readable_properties import SearchServiceReadableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SearchServiceReadableProperties from a JSON string
search_service_readable_properties_instance = SearchServiceReadableProperties.from_json(json)
# print the JSON string representation of the object
print(SearchServiceReadableProperties.to_json())

# convert the object into a dict
search_service_readable_properties_dict = search_service_readable_properties_instance.to_dict()
# create an instance of SearchServiceReadableProperties from a dict
search_service_readable_properties_from_dict = SearchServiceReadableProperties.from_dict(search_service_readable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


