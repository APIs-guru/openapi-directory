# Offering


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**badge** | [**OfferingBadge**](OfferingBadge.md) |  | [optional] 
**content_id** | **str** | The identifier for a specific version of a course | [optional] 
**description** | **str** |  | [optional] 
**early_close_off_date** | **datetime** |  | [optional] 
**end** | **datetime** |  | [optional] 
**has_early_close_off** | **bool** |  | [optional] 
**identifier** | **str** |  | [optional] 
**is_readonly** | **bool** |  | [optional] 
**metadata** | [**OfferingMetadata**](OfferingMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**overview** | **str** |  | [optional] 
**root_content_id** | **str** | Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course. | [optional] 
**start** | **datetime** |  | [optional] 
**trailer_video_url** | **str** |  | [optional] 
**use_relative_dates** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.offering import Offering

# TODO update the JSON string below
json = "{}"
# create an instance of Offering from a JSON string
offering_instance = Offering.from_json(json)
# print the JSON string representation of the object
print(Offering.to_json())

# convert the object into a dict
offering_dict = offering_instance.to_dict()
# create an instance of Offering from a dict
offering_from_dict = Offering.from_dict(offering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


