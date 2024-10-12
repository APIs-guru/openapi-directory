# PersonCover

The cover photo content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_info** | [**PersonCoverCoverInfo**](PersonCoverCoverInfo.md) |  | [optional] 
**cover_photo** | [**PersonCoverCoverPhoto**](PersonCoverCoverPhoto.md) |  | [optional] 
**layout** | **str** | The layout of the cover art. Possible values include, but are not limited to, the following values:   - \&quot;banner\&quot; - One large image banner. | [optional] 

## Example

```python
from openapi_client.models.person_cover import PersonCover

# TODO update the JSON string below
json = "{}"
# create an instance of PersonCover from a JSON string
person_cover_instance = PersonCover.from_json(json)
# print the JSON string representation of the object
print(PersonCover.to_json())

# convert the object into a dict
person_cover_dict = person_cover_instance.to_dict()
# create an instance of PersonCover from a dict
person_cover_from_dict = PersonCover.from_dict(person_cover_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


