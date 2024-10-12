# OfferingRequired


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge** | [**OfferingBadge**](OfferingBadge.md) |  | [optional] 
**content_id** | **str** | The identifier for a specific version of a course | [optional] 
**create_default_channels** | **bool** |  | [optional] [default to False]
**description** | **str** |  | [optional] 
**early_close_off_date** | **datetime** |  | [optional] 
**end** | **datetime** |  | [optional] 
**has_early_close_off** | **bool** |  | [optional] 
**identifier** | **str** |  | [optional] 
**is_readonly** | **bool** |  | [optional] 
**metadata** | [**OfferingMetadata**](OfferingMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**root_content_id** | **str** | Every time a course is republished it&#39;s assigned a new contentId. rootContentId is the first original contentId associated with a course. | [optional] 
**start** | **datetime** |  | 
**trailer_video_url** | **str** |  | [optional] 
**use_relative_dates** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.offering_required import OfferingRequired

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingRequired from a JSON string
offering_required_instance = OfferingRequired.from_json(json)
# print the JSON string representation of the object
print(OfferingRequired.to_json())

# convert the object into a dict
offering_required_dict = offering_required_instance.to_dict()
# create an instance of OfferingRequired from a dict
offering_required_from_dict = OfferingRequired.from_dict(offering_required_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


