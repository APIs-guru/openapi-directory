# ContactDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_phone** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**facebook_url** | **str** |  | [optional] 
**instagram_name** | **str** |  | [optional] 
**lastfm_url** | **str** |  | [optional] 
**soundcloud_url** | **str** |  | [optional] 
**spotify_url** | **str** |  | [optional] 
**twitter_name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**youtube_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_detail import ContactDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ContactDetail from a JSON string
contact_detail_instance = ContactDetail.from_json(json)
# print the JSON string representation of the object
print(ContactDetail.to_json())

# convert the object into a dict
contact_detail_dict = contact_detail_instance.to_dict()
# create an instance of ContactDetail from a dict
contact_detail_from_dict = ContactDetail.from_dict(contact_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


