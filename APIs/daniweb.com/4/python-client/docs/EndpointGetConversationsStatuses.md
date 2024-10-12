# EndpointGetConversationsStatuses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointGetConversationsIDStatusesDataInner]**](EndpointGetConversationsIDStatusesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_conversations_statuses import EndpointGetConversationsStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetConversationsStatuses from a JSON string
endpoint_get_conversations_statuses_instance = EndpointGetConversationsStatuses.from_json(json)
# print the JSON string representation of the object
print(EndpointGetConversationsStatuses.to_json())

# convert the object into a dict
endpoint_get_conversations_statuses_dict = endpoint_get_conversations_statuses_instance.to_dict()
# create an instance of EndpointGetConversationsStatuses from a dict
endpoint_get_conversations_statuses_from_dict = EndpointGetConversationsStatuses.from_dict(endpoint_get_conversations_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


