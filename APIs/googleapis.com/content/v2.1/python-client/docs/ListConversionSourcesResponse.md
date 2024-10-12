# ListConversionSourcesResponse

Response message for the ListConversionSources method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_sources** | [**List[ConversionSource]**](ConversionSource.md) | List of conversion sources. | [optional] 
**next_page_token** | **str** | Token to be used to fetch the next results page. | [optional] 

## Example

```python
from openapi_client.models.list_conversion_sources_response import ListConversionSourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConversionSourcesResponse from a JSON string
list_conversion_sources_response_instance = ListConversionSourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListConversionSourcesResponse.to_json())

# convert the object into a dict
list_conversion_sources_response_dict = list_conversion_sources_response_instance.to_dict()
# create an instance of ListConversionSourcesResponse from a dict
list_conversion_sources_response_from_dict = ListConversionSourcesResponse.from_dict(list_conversion_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


