# SearchFreetextResponseAttractionAllOfData

**object** detailing **an attraction** that matches the search criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attraction_city** | **float** | City in which this attraction is located | [optional] 
**attraction_latitude** | **float** | Latitude of this attraction&#39;s location | [optional] 
**attraction_longitude** | **float** | Longitude of this attraction&#39;s location | [optional] 
**attraction_state** | **float** | State in which this attraction is located | [optional] 
**attraction_street_address** | **float** | Street address of this attraction | [optional] 
**description_intro** | **str** | Description introduction text | [optional] 
**description_text** | **str** | Description of this attraction | [optional] 
**destination_id** | **int** | Destination ID for the destination in which this attraction is located | [optional] 
**editors_pick** | **bool** | ignore (Viator only) | [optional] 
**keyword_count** | **int** | ignore (Viator only) | [optional] 
**keywords** | **List[str]** | ignore (Viator only) | [optional] 
**overview_summary** | **str** | HTML-formatted summary overview of this attraction | [optional] 
**page_primary_language** | **str** | Language of the natural-language elements in this response | [optional] 
**page_title** | **str** | Title of page | [optional] 
**page_url_name** | **str** | URL path fragment for attraction | [optional] 
**panorama_count** | **int** | ignore (Viator only) | [optional] 
**photo_count** | **int** | Number of photos available for this attraction | [optional] 
**primary_destination_id** | **int** | Primary destination ID for the destination in which this attraction is located | [optional] 
**primary_destination_name** | **str** | Primary destination ID for the destination in which this attraction is located | [optional] 
**primary_destination_url_name** | **str** | Name of primary destination for this attraction | [optional] 
**product_count** | **int** | ignore (Viator only) | [optional] 
**published_date** | **str** | ignore (Viator only) | [optional] 
**rating** | **float** | Numeric rating for this attraction | [optional] 
**review_count** | **int** | Number of reviews for this attraction | [optional] 
**seo_id** | **int** | ignore (Viator only) | [optional] 
**seo_type** | **str** | Type of result; i.e. &#x60;\&quot;ATTRACTION\&quot;&#x60; | [optional] 
**show_photos** | **bool** | ignore (Viator only) | [optional] 
**show_reviews** | **bool** | ignore (Viator only) | [optional] 
**sort_order** | **int** | ignore (Viator only) | [optional] 
**tab_title** | **str** | Tab title for this attraction | [optional] 
**thumbnail_hi_res_url** | **str** | URL for high-resolution image for this attraction | [optional] 
**thumbnail_url** | **str** | URL for medium-resolution image for this attraction | [optional] 
**title** | **str** | Title of this attraction | [optional] 
**user_name** | **str** | ignore (Viator only) | [optional] 
**web_url** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.search_freetext_response_attraction_all_of_data import SearchFreetextResponseAttractionAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFreetextResponseAttractionAllOfData from a JSON string
search_freetext_response_attraction_all_of_data_instance = SearchFreetextResponseAttractionAllOfData.from_json(json)
# print the JSON string representation of the object
print(SearchFreetextResponseAttractionAllOfData.to_json())

# convert the object into a dict
search_freetext_response_attraction_all_of_data_dict = search_freetext_response_attraction_all_of_data_instance.to_dict()
# create an instance of SearchFreetextResponseAttractionAllOfData from a dict
search_freetext_response_attraction_all_of_data_from_dict = SearchFreetextResponseAttractionAllOfData.from_dict(search_freetext_response_attraction_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


