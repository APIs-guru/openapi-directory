# CreateDmEventResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dm_conversation_id** | **str** | Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a &#39;-&#39; character in the case of one-on-one DM Conversations. | 
**dm_event_id** | **str** | Unique identifier of a DM Event. | 

## Example

```python
from openapi_client.models.create_dm_event_response_data import CreateDmEventResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDmEventResponseData from a JSON string
create_dm_event_response_data_instance = CreateDmEventResponseData.from_json(json)
# print the JSON string representation of the object
print(CreateDmEventResponseData.to_json())

# convert the object into a dict
create_dm_event_response_data_dict = create_dm_event_response_data_instance.to_dict()
# create an instance of CreateDmEventResponseData from a dict
create_dm_event_response_data_from_dict = CreateDmEventResponseData.from_dict(create_dm_event_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


