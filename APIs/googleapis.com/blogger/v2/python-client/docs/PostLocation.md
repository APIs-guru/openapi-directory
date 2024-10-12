# PostLocation

The location for geotagged posts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Location&#39;s latitude. | [optional] 
**lng** | **float** | Location&#39;s longitude. | [optional] 
**name** | **str** | Location name. | [optional] 
**span** | **str** | Location&#39;s viewport span. Can be used when rendering a map preview. | [optional] 

## Example

```python
from openapi_client.models.post_location import PostLocation

# TODO update the JSON string below
json = "{}"
# create an instance of PostLocation from a JSON string
post_location_instance = PostLocation.from_json(json)
# print the JSON string representation of the object
print(PostLocation.to_json())

# convert the object into a dict
post_location_dict = post_location_instance.to_dict()
# create an instance of PostLocation from a dict
post_location_from_dict = PostLocation.from_dict(post_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


