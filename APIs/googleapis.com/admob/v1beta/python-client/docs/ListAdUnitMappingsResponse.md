# ListAdUnitMappingsResponse

Response for the ListAdUnitMappingsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_unit_mappings** | [**List[AdUnitMapping]**](AdUnitMapping.md) | The ad unit mappings from the specified account and ad unit. | [optional] 
**next_page_token** | **str** | Used to set the &#x60;page_token&#x60; in the &#x60;ListAdUnitMappingsRequest&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_ad_unit_mappings_response import ListAdUnitMappingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdUnitMappingsResponse from a JSON string
list_ad_unit_mappings_response_instance = ListAdUnitMappingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdUnitMappingsResponse.to_json())

# convert the object into a dict
list_ad_unit_mappings_response_dict = list_ad_unit_mappings_response_instance.to_dict()
# create an instance of ListAdUnitMappingsResponse from a dict
list_ad_unit_mappings_response_from_dict = ListAdUnitMappingsResponse.from_dict(list_ad_unit_mappings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


