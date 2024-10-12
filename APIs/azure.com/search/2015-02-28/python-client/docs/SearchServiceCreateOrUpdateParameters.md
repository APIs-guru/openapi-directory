# SearchServiceCreateOrUpdateParameters

Properties that describe an Azure Search service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The geographic location of the Search service. | [optional] 
**properties** | [**SearchServiceProperties**](SearchServiceProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags to help categorize the Search service in the Azure Portal. | [optional] 

## Example

```python
from openapi_client.models.search_service_create_or_update_parameters import SearchServiceCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SearchServiceCreateOrUpdateParameters from a JSON string
search_service_create_or_update_parameters_instance = SearchServiceCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SearchServiceCreateOrUpdateParameters.to_json())

# convert the object into a dict
search_service_create_or_update_parameters_dict = search_service_create_or_update_parameters_instance.to_dict()
# create an instance of SearchServiceCreateOrUpdateParameters from a dict
search_service_create_or_update_parameters_from_dict = SearchServiceCreateOrUpdateParameters.from_dict(search_service_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


