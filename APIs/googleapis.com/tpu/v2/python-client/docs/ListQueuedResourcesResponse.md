# ListQueuedResourcesResponse

Response for ListQueuedResources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next page token or empty if none. | [optional] 
**queued_resources** | [**List[QueuedResource]**](QueuedResource.md) | The listed queued resources. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_queued_resources_response import ListQueuedResourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListQueuedResourcesResponse from a JSON string
list_queued_resources_response_instance = ListQueuedResourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListQueuedResourcesResponse.to_json())

# convert the object into a dict
list_queued_resources_response_dict = list_queued_resources_response_instance.to_dict()
# create an instance of ListQueuedResourcesResponse from a dict
list_queued_resources_response_from_dict = ListQueuedResourcesResponse.from_dict(list_queued_resources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


