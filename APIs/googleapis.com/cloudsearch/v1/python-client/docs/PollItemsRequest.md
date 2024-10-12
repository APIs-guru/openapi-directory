# PollItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_name** | **str** | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**limit** | **int** | Maximum number of items to return. The maximum value is 100 and the default value is 20. | [optional] 
**queue** | **str** | Queue name to fetch items from. If unspecified, PollItems will fetch from &#39;default&#39; queue. The maximum length is 100 characters. | [optional] 
**status_codes** | **List[str]** | Limit the items polled to the ones with these statuses. | [optional] 

## Example

```python
from openapi_client.models.poll_items_request import PollItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PollItemsRequest from a JSON string
poll_items_request_instance = PollItemsRequest.from_json(json)
# print the JSON string representation of the object
print(PollItemsRequest.to_json())

# convert the object into a dict
poll_items_request_dict = poll_items_request_instance.to_dict()
# create an instance of PollItemsRequest from a dict
poll_items_request_from_dict = PollItemsRequest.from_dict(poll_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


