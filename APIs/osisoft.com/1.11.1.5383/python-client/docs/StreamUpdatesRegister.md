# StreamUpdatesRegister


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**Errors**](Errors.md) |  | [optional] 
**latest_marker** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**source_name** | **str** |  | [optional] 
**source_path** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_updates_register import StreamUpdatesRegister

# TODO update the JSON string below
json = "{}"
# create an instance of StreamUpdatesRegister from a JSON string
stream_updates_register_instance = StreamUpdatesRegister.from_json(json)
# print the JSON string representation of the object
print(StreamUpdatesRegister.to_json())

# convert the object into a dict
stream_updates_register_dict = stream_updates_register_instance.to_dict()
# create an instance of StreamUpdatesRegister from a dict
stream_updates_register_from_dict = StreamUpdatesRegister.from_dict(stream_updates_register_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


