# MessagesSearchTimeSeries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_from** | **str** |  | [optional] 
**date_to** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**query** | **str** |  | [optional] 
**senders** | **List[str]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.messages_search_time_series import MessagesSearchTimeSeries

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSearchTimeSeries from a JSON string
messages_search_time_series_instance = MessagesSearchTimeSeries.from_json(json)
# print the JSON string representation of the object
print(MessagesSearchTimeSeries.to_json())

# convert the object into a dict
messages_search_time_series_dict = messages_search_time_series_instance.to_dict()
# create an instance of MessagesSearchTimeSeries from a dict
messages_search_time_series_from_dict = MessagesSearchTimeSeries.from_dict(messages_search_time_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


