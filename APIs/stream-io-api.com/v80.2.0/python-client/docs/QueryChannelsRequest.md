# QueryChannelsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**connection_id** | **str** |  | [optional] 
**filter_conditions** | **Dict[str, object]** |  | [optional] 
**limit** | **int** | Number of channels to limit | [optional] 
**member_limit** | **int** | Number of members to limit | [optional] 
**message_limit** | **int** | Number of messages to limit | [optional] 
**offset** | **int** | Channel pagination offset | [optional] 
**presence** | **bool** |  | [optional] 
**sort** | [**List[SortParamRequest]**](SortParamRequest.md) | List of sort parameters | 
**state** | **bool** | Whether to update channel state or not | [optional] 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**watch** | **bool** | Whether to start watching found channels or not | [optional] 

## Example

```python
from openapi_client.models.query_channels_request import QueryChannelsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryChannelsRequest from a JSON string
query_channels_request_instance = QueryChannelsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryChannelsRequest.to_json())

# convert the object into a dict
query_channels_request_dict = query_channels_request_instance.to_dict()
# create an instance of QueryChannelsRequest from a dict
query_channels_request_from_dict = QueryChannelsRequest.from_dict(query_channels_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


