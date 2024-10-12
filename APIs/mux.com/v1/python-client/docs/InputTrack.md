# InputTrack


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channels** | **int** |  | [optional] 
**duration** | **float** |  | [optional] 
**encoding** | **str** |  | [optional] 
**frame_rate** | **float** |  | [optional] 
**height** | **int** |  | [optional] 
**sample_rate** | **int** |  | [optional] 
**sample_size** | **int** |  | [optional] 
**type** | **str** |  | [optional] 
**width** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.input_track import InputTrack

# TODO update the JSON string below
json = "{}"
# create an instance of InputTrack from a JSON string
input_track_instance = InputTrack.from_json(json)
# print the JSON string representation of the object
print(InputTrack.to_json())

# convert the object into a dict
input_track_dict = input_track_instance.to_dict()
# create an instance of InputTrack from a dict
input_track_from_dict = InputTrack.from_dict(input_track_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


