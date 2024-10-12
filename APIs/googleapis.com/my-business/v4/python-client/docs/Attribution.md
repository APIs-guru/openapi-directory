# Attribution

Attribution information for customer media items, such as the contributor's name and profile picture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile_name** | **str** | The user name to attribute the media item to. | [optional] 
**profile_photo_url** | **str** | URL of the attributed user&#39;s profile photo thumbnail. | [optional] 
**profile_url** | **str** | The URL of the attributed user&#39;s Google Maps profile page. | [optional] 
**takedown_url** | **str** | The URL of the takedown page, where the media item can be reported if it is inappropriate. | [optional] 

## Example

```python
from openapi_client.models.attribution import Attribution

# TODO update the JSON string below
json = "{}"
# create an instance of Attribution from a JSON string
attribution_instance = Attribution.from_json(json)
# print the JSON string representation of the object
print(Attribution.to_json())

# convert the object into a dict
attribution_dict = attribution_instance.to_dict()
# create an instance of Attribution from a dict
attribution_from_dict = Attribution.from_dict(attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


