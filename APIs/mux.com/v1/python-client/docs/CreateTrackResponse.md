# CreateTrackResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Track**](Track.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_track_response import CreateTrackResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTrackResponse from a JSON string
create_track_response_instance = CreateTrackResponse.from_json(json)
# print the JSON string representation of the object
print(CreateTrackResponse.to_json())

# convert the object into a dict
create_track_response_dict = create_track_response_instance.to_dict()
# create an instance of CreateTrackResponse from a dict
create_track_response_from_dict = CreateTrackResponse.from_dict(create_track_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


