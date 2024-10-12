# Transcoder4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedules** | [**List[Schedule]**](Schedule.md) | Array of schedules of this transcoder. See /schedules for more details. | [optional] 

## Example

```python
from openapi_client.models.transcoder4 import Transcoder4

# TODO update the JSON string below
json = "{}"
# create an instance of Transcoder4 from a JSON string
transcoder4_instance = Transcoder4.from_json(json)
# print the JSON string representation of the object
print(Transcoder4.to_json())

# convert the object into a dict
transcoder4_dict = transcoder4_instance.to_dict()
# create an instance of Transcoder4 from a dict
transcoder4_from_dict = Transcoder4.from_dict(transcoder4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


