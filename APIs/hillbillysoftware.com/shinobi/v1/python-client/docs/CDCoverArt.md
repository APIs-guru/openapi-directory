# CDCoverArt


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_image** | **str** |  | [optional] 
**cover_thumb_medium** | **str** |  | [optional] 
**cover_thumb_small** | **str** |  | [optional] 
**cover_type** | **str** |  | [optional] 
**music_brainz_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cd_cover_art import CDCoverArt

# TODO update the JSON string below
json = "{}"
# create an instance of CDCoverArt from a JSON string
cd_cover_art_instance = CDCoverArt.from_json(json)
# print the JSON string representation of the object
print(CDCoverArt.to_json())

# convert the object into a dict
cd_cover_art_dict = cd_cover_art_instance.to_dict()
# create an instance of CDCoverArt from a dict
cd_cover_art_from_dict = CDCoverArt.from_dict(cd_cover_art_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


