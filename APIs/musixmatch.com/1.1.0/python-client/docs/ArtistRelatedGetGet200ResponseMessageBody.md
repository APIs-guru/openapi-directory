# ArtistRelatedGetGet200ResponseMessageBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artist_list** | [**List[ArtistGetGet200ResponseMessageBody]**](ArtistGetGet200ResponseMessageBody.md) | A list of artists | [optional] 

## Example

```python
from openapi_client.models.artist_related_get_get200_response_message_body import ArtistRelatedGetGet200ResponseMessageBody

# TODO update the JSON string below
json = "{}"
# create an instance of ArtistRelatedGetGet200ResponseMessageBody from a JSON string
artist_related_get_get200_response_message_body_instance = ArtistRelatedGetGet200ResponseMessageBody.from_json(json)
# print the JSON string representation of the object
print(ArtistRelatedGetGet200ResponseMessageBody.to_json())

# convert the object into a dict
artist_related_get_get200_response_message_body_dict = artist_related_get_get200_response_message_body_instance.to_dict()
# create an instance of ArtistRelatedGetGet200ResponseMessageBody from a dict
artist_related_get_get200_response_message_body_from_dict = ArtistRelatedGetGet200ResponseMessageBody.from_dict(artist_related_get_get200_response_message_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


