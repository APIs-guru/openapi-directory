# SearchFreetextResponseRecommendationAllOfData

**object** detailing a **recommendation** that matches the search criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attraction_city** | **str** | ignore (Viator only) | [optional] 
**attraction_latitude** | **float** | ignore (Viator only) | [optional] 
**attraction_longitude** | **float** | ignore (Viator only) | [optional] 
**attraction_state** | **str** | ignore (Viator only) | [optional] 
**attraction_street_address** | **str** | ignore (Viator only) | [optional] 
**description_intro** | **str** | Introductory text for this recommendation | [optional] 
**description_text** | **str** | Text for this recommendation | [optional] 
**destination_id** | **int** | Destination Id for the destination of this recommendation | [optional] 
**editors_pick** | **bool** | ignore (Viator only) | [optional] 
**keyword_count** | **int** | ignore (Viator only) | [optional] 
**keywords** | **List[str]** | ignore (Viator only) | [optional] 
**overview_summary** | **str** | HTML-formatted overview of recommendation | [optional] 
**page_primary_language** | **str** | language for the natural-language text in this response | [optional] 
**page_title** | **str** | Title of this page | [optional] 
**page_url_name** | **str** | URL path fragment for this recommendation | [optional] 
**panorama_count** | **int** | ignore (Viator only) | [optional] 
**photo_count** | **int** | ignore (Viator only) | [optional] 
**primary_destination_id** | **int** | Destination Id for the primary destination of this recommendation | [optional] 
**primary_destination_name** | **str** | Name of primary destination for this recommendation | [optional] 
**primary_destination_url_name** | **str** | ignore (Viator only) | [optional] 
**product_count** | **int** | Number of products that this recommendation refers to | [optional] 
**published_date** | **str** | ignore (Viator only) | [optional] 
**rating** | **float** | Numeric average rating for this recommendation | [optional] 
**review_count** | **int** | number of reviews for this recommendation | [optional] 
**seo_id** | **int** | ignore (Viator only) | [optional] 
**seo_type** | **str** | Type of response; i.e. &#x60;\&quot;RECOMMENDATION\&quot;&#x60; | [optional] 
**show_photos** | **bool** | ignore (Viator only) | [optional] 
**show_reviews** | **bool** | ignore (Viator only) | [optional] 
**sort_order** | **int** | ignore (Viator only) | [optional] 
**tab_title** | **str** | Tab-title for this recommendation | [optional] 
**thumbnail_hi_res_url** | **str** | URL for the high-resolution image for this recommendation | [optional] 
**thumbnail_url** | **str** | URL for medium-resolution image for this recommendation | [optional] 
**title** | **str** | Title of this recommendation | [optional] 
**user_name** | **str** | ignore (Viator only) | [optional] 
**web_url** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.search_freetext_response_recommendation_all_of_data import SearchFreetextResponseRecommendationAllOfData

# TODO update the JSON string below
json = "{}"
# create an instance of SearchFreetextResponseRecommendationAllOfData from a JSON string
search_freetext_response_recommendation_all_of_data_instance = SearchFreetextResponseRecommendationAllOfData.from_json(json)
# print the JSON string representation of the object
print(SearchFreetextResponseRecommendationAllOfData.to_json())

# convert the object into a dict
search_freetext_response_recommendation_all_of_data_dict = search_freetext_response_recommendation_all_of_data_instance.to_dict()
# create an instance of SearchFreetextResponseRecommendationAllOfData from a dict
search_freetext_response_recommendation_all_of_data_from_dict = SearchFreetextResponseRecommendationAllOfData.from_dict(search_freetext_response_recommendation_all_of_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


