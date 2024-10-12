# PersonCoverCoverInfo

Extra information about the cover photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_image_offset** | **int** | The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout. | [optional] 
**top_image_offset** | **int** | The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout. | [optional] 

## Example

```python
from openapi_client.models.person_cover_cover_info import PersonCoverCoverInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PersonCoverCoverInfo from a JSON string
person_cover_cover_info_instance = PersonCoverCoverInfo.from_json(json)
# print the JSON string representation of the object
print(PersonCoverCoverInfo.to_json())

# convert the object into a dict
person_cover_cover_info_dict = person_cover_cover_info_instance.to_dict()
# create an instance of PersonCoverCoverInfo from a dict
person_cover_cover_info_from_dict = PersonCoverCoverInfo.from_dict(person_cover_cover_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


