# ActivityContentDetailsSocial

Details about a social network post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the social network post. | [optional] 
**image_url** | **str** | An image of the post&#39;s author. | [optional] 
**reference_url** | **str** | The URL of the social network post. | [optional] 
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 
**type** | **str** | The name of the social network. | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_social import ActivityContentDetailsSocial

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsSocial from a JSON string
activity_content_details_social_instance = ActivityContentDetailsSocial.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsSocial.to_json())

# convert the object into a dict
activity_content_details_social_dict = activity_content_details_social_instance.to_dict()
# create an instance of ActivityContentDetailsSocial from a dict
activity_content_details_social_from_dict = ActivityContentDetailsSocial.from_dict(activity_content_details_social_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


