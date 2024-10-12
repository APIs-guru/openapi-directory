# FloodlightActivityPublisherDynamicTag

Publisher Dynamic Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_through** | **bool** | Whether this tag is applicable only for click-throughs. | [optional] 
**directory_site_id** | **str** | Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated. | [optional] 
**dynamic_tag** | [**FloodlightActivityDynamicTag**](FloodlightActivityDynamicTag.md) |  | [optional] 
**site_id** | **str** | Site ID of this dynamic tag. | [optional] 
**site_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**view_through** | **bool** | Whether this tag is applicable only for view-throughs. | [optional] 

## Example

```python
from openapi_client.models.floodlight_activity_publisher_dynamic_tag import FloodlightActivityPublisherDynamicTag

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivityPublisherDynamicTag from a JSON string
floodlight_activity_publisher_dynamic_tag_instance = FloodlightActivityPublisherDynamicTag.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivityPublisherDynamicTag.to_json())

# convert the object into a dict
floodlight_activity_publisher_dynamic_tag_dict = floodlight_activity_publisher_dynamic_tag_instance.to_dict()
# create an instance of FloodlightActivityPublisherDynamicTag from a dict
floodlight_activity_publisher_dynamic_tag_from_dict = FloodlightActivityPublisherDynamicTag.from_dict(floodlight_activity_publisher_dynamic_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


