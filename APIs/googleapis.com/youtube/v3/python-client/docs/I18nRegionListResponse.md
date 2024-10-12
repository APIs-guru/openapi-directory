# I18nRegionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[I18nRegion]**](I18nRegion.md) | A list of regions where YouTube is available. In this map, the i18n region ID is the map key, and its value is the corresponding i18nRegion resource. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#i18nRegionListResponse\&quot;. | [optional] [default to 'youtube#i18nRegionListResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.i18n_region_list_response import I18nRegionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of I18nRegionListResponse from a JSON string
i18n_region_list_response_instance = I18nRegionListResponse.from_json(json)
# print the JSON string representation of the object
print(I18nRegionListResponse.to_json())

# convert the object into a dict
i18n_region_list_response_dict = i18n_region_list_response_instance.to_dict()
# create an instance of I18nRegionListResponse from a dict
i18n_region_list_response_from_dict = I18nRegionListResponse.from_dict(i18n_region_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


