# PhotoDates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lastupdate** | **str** |  | [optional] 
**posted** | **str** |  | [optional] 
**taken** | **str** |  | [optional] 
**takengranularity** | **str** |  | [optional] 
**takenunknown** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.photo_dates import PhotoDates

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoDates from a JSON string
photo_dates_instance = PhotoDates.from_json(json)
# print the JSON string representation of the object
print(PhotoDates.to_json())

# convert the object into a dict
photo_dates_dict = photo_dates_instance.to_dict()
# create an instance of PhotoDates from a dict
photo_dates_from_dict = PhotoDates.from_dict(photo_dates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


