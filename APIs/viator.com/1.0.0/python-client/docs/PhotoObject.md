# PhotoObject

**object** detailing a single photo from a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | **HTML-formatted caption** for *this* photograph - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol  | [optional] 
**editors_pick** | **bool** | **indicator**: &#x60;true&#x60; if *this* photograph has been tagged as an *editor&#39;s pick*; i.e., can be given preference for display | [optional] 
**owner_avatar_url** | **str** | **URL** for the avatar image of the user that submitted *this* photograph | [optional] 
**owner_country** | **str** | **country** in which the owner of *this* photograph is located | [optional] 
**owner_id** | **int** | **unique numeric identifier** of the user that owns the photograph | [optional] 
**owner_name** | **str** | **handle** of the user that submitted *this* photograph; e.g., &#39;Husker1k&#39; | [optional] 
**photo_hi_res_url** | **str** | **URL** of the high-resolution version of *this* photograph | [optional] 
**photo_id** | **int** | **unique numeric identifier** of *this* photograph | [optional] 
**photo_medium_res_url** | **str** | **URL** of the medium-resolution version of *this* photograph | [optional] 
**photo_url** | **str** | **URL** for the standard-resolution version of *this* photograph | [optional] 
**product_code** | **str** | **product code** for the product that *this* photograph is of | [optional] 
**product_title** | **str** | **natural-language title** of the product associated with *this* photograph; e.g., &#39;Sydney and Bondi Hop-on Hop-off Tour&#39; | [optional] 
**product_url_name** | **str** | **URL-formatted title** of the product associated with *this* photograph; e.g., &#x60;Sydney-and-Bondi-Hop-on-Hop-off-Tour&#x60; | [optional] 
**sort_order** | **int** | **sort order** for *this* photograph; e.g., &#x60;3&#x60; | [optional] 
**ssl_supported** | **bool** | ignore (Viator only) | [optional] 
**thumbnail_url** | **str** | **URL** of *this* product&#39;s thumbnail image | [optional] 
**time_uploaded** | **str** | **date** on which *this* photograph was submitted | [optional] 
**title** | **str** | **title** of *this* photograph | [optional] 

## Example

```python
from openapi_client.models.photo_object import PhotoObject

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoObject from a JSON string
photo_object_instance = PhotoObject.from_json(json)
# print the JSON string representation of the object
print(PhotoObject.to_json())

# convert the object into a dict
photo_object_dict = photo_object_instance.to_dict()
# create an instance of PhotoObject from a dict
photo_object_from_dict = PhotoObject.from_dict(photo_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


