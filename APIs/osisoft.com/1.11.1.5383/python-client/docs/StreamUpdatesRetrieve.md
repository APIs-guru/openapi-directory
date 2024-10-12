# StreamUpdatesRetrieve


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[DataPipeEvent]**](DataPipeEvent.md) |  | [optional] 
**exception** | [**Errors**](Errors.md) |  | [optional] 
**latest_marker** | **str** |  | [optional] 
**requested_marker** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**source_name** | **str** |  | [optional] 
**source_path** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.stream_updates_retrieve import StreamUpdatesRetrieve

# TODO update the JSON string below
json = "{}"
# create an instance of StreamUpdatesRetrieve from a JSON string
stream_updates_retrieve_instance = StreamUpdatesRetrieve.from_json(json)
# print the JSON string representation of the object
print(StreamUpdatesRetrieve.to_json())

# convert the object into a dict
stream_updates_retrieve_dict = stream_updates_retrieve_instance.to_dict()
# create an instance of StreamUpdatesRetrieve from a dict
stream_updates_retrieve_from_dict = StreamUpdatesRetrieve.from_dict(stream_updates_retrieve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


