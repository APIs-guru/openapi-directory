# Track


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**track** | **str** | Identifier for this track. | [optional] 
**user_fraction** | **float** |  | [optional] 
**version_codes** | **List[int]** | Version codes to make active on this track. Note that this list should contain all versions you wish to be active, including those you wish to retain from previous releases. | [optional] 

## Example

```python
from openapi_client.models.track import Track

# TODO update the JSON string below
json = "{}"
# create an instance of Track from a JSON string
track_instance = Track.from_json(json)
# print the JSON string representation of the object
print(Track.to_json())

# convert the object into a dict
track_dict = track_instance.to_dict()
# create an instance of Track from a dict
track_from_dict = Track.from_dict(track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


