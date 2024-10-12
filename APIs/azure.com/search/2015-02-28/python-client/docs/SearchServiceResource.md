# SearchServiceResource

Describes an Azure Search service and its current state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource Id of the Azure Search service. | [optional] [readonly] 
**location** | **str** | The geographic location of the Search service. | [optional] 
**name** | **str** | The name of the Search service. | [optional] 
**properties** | [**SearchServiceReadableProperties**](SearchServiceReadableProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags to help categorize the Search service in the Azure Portal. | [optional] 

## Example

```python
from openapi_client.models.search_service_resource import SearchServiceResource

# TODO update the JSON string below
json = "{}"
# create an instance of SearchServiceResource from a JSON string
search_service_resource_instance = SearchServiceResource.from_json(json)
# print the JSON string representation of the object
print(SearchServiceResource.to_json())

# convert the object into a dict
search_service_resource_dict = search_service_resource_instance.to_dict()
# create an instance of SearchServiceResource from a dict
search_service_resource_from_dict = SearchServiceResource.from_dict(search_service_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


