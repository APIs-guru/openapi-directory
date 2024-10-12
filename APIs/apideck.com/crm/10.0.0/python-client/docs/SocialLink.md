# SocialLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the social link | [optional] 
**type** | **str** | Type of the social link, e.g. twitter | [optional] 
**url** | **str** | URL of the social link, e.g. https://www.twitter.com/apideck | 

## Example

```python
from openapi_client.models.social_link import SocialLink

# TODO update the JSON string below
json = "{}"
# create an instance of SocialLink from a JSON string
social_link_instance = SocialLink.from_json(json)
# print the JSON string representation of the object
print(SocialLink.to_json())

# convert the object into a dict
social_link_dict = social_link_instance.to_dict()
# create an instance of SocialLink from a dict
social_link_from_dict = SocialLink.from_dict(social_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


