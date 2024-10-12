# PollItemsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Item]**](Item.md) | Set of items from the queue available for connector to process. These items have the following subset of fields populated: version metadata.hash structured_data.hash content.hash payload status queue | [optional] 

## Example

```python
from openapi_client.models.poll_items_response import PollItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PollItemsResponse from a JSON string
poll_items_response_instance = PollItemsResponse.from_json(json)
# print the JSON string representation of the object
print(PollItemsResponse.to_json())

# convert the object into a dict
poll_items_response_dict = poll_items_response_instance.to_dict()
# create an instance of PollItemsResponse from a dict
poll_items_response_from_dict = PollItemsResponse.from_dict(poll_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


