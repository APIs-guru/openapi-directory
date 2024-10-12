# ParsedListing

A parsed listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | If not empty, it indicates that this listing belongs to a brand of the feed. | [optional] 
**category** | [**List[LocalizedText]**](LocalizedText.md) | The partner provided category (accommodation type) of the property. | [optional] 
**data_issue_detail** | [**List[DataIssueDetail]**](DataIssueDetail.md) | Data issues about this listing | [optional] 
**description** | [**List[LocalizedText]**](LocalizedText.md) | Description of the property. | [optional] 
**image** | [**List[Image]**](Image.md) | Images associated with this listing, localized. | [optional] 
**imprecision_radius_meters** | **int** | Represents the accuracy of the location. The listing can be anywhere within the defined circular area. | [optional] 
**is_served** | **bool** | Whether the listing can be served based on non image data alone. | [optional] 
**listing_name** | [**List[LocalizedText]**](LocalizedText.md) | List of localized names. | [optional] 
**location** | [**LatLng**](LatLng.md) |  | [optional] 
**partner_list_id** | **str** | The list id on partner lec feed, provided by partner. | [optional] 
**region_code** | **str** | The country code where the listing is located. | [optional] 
**review** | [**List[Review]**](Review.md) | Reviews associated with this listing. Each review proto has a single language attached to it. | [optional] 
**unit_attributes** | **Dict[str, str]** | VR List attribute. | [optional] 

## Example

```python
from openapi_client.models.parsed_listing import ParsedListing

# TODO update the JSON string below
json = "{}"
# create an instance of ParsedListing from a JSON string
parsed_listing_instance = ParsedListing.from_json(json)
# print the JSON string representation of the object
print(ParsedListing.to_json())

# convert the object into a dict
parsed_listing_dict = parsed_listing_instance.to_dict()
# create an instance of ParsedListing from a dict
parsed_listing_from_dict = ParsedListing.from_dict(parsed_listing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


