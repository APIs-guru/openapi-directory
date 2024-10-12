# ReviewObject

**object** containing a single user review

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_avatar_url** | **str** | **URL** of the reviewer&#39;s avatar image | [optional] 
**owner_country** | **str** | **country** in which the reviewer is located | [optional] 
**owner_id** | **int** | **unique numeric identifier** of the user that submitted *this* review | [optional] 
**owner_name** | **str** | **name** of the user that submitted *this* review | [optional] 
**product_code** | **str** | **product code** of the product that *this* review is about; e.g., &#x60;5010SYDNEY&#x60; | [optional] 
**product_title** | **str** | **title** of the product that *this* review is about | [optional] 
**product_url_name** | **str** | **URL-formatted title** of the product that *this* review is about | [optional] 
**published_date** | **str** | **date** that *this* review was published | [optional] 
**rating** | **int** | **rating** given by the reviewer | [optional] 
**review** | **str** | **HTML-formatted content** of the review - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol  | [optional] 
**review_id** | **int** | **unique numeric identifier** of *this* review | [optional] 
**sort_order** | **int** | **sort order** for *this* review | [optional] 
**ssl_supported** | **bool** | ignore (Viator only) | [optional] 
**submission_date** | **str** | **date** that *this* review was submitted | [optional] 
**viator_feedback** | **str** | ignore (Viator only) | [optional] 
**viator_notes** | **str** | ignore (Viator only) | [optional] 

## Example

```python
from openapi_client.models.review_object import ReviewObject

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewObject from a JSON string
review_object_instance = ReviewObject.from_json(json)
# print the JSON string representation of the object
print(ReviewObject.to_json())

# convert the object into a dict
review_object_dict = review_object_instance.to_dict()
# create an instance of ReviewObject from a dict
review_object_from_dict = ReviewObject.from_dict(review_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


