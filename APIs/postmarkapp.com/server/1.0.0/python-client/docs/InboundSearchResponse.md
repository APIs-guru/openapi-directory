# InboundSearchResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_messages** | [**List[InboundMessageDetail]**](InboundMessageDetail.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.inbound_search_response import InboundSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InboundSearchResponse from a JSON string
inbound_search_response_instance = InboundSearchResponse.from_json(json)
# print the JSON string representation of the object
print(InboundSearchResponse.to_json())

# convert the object into a dict
inbound_search_response_dict = inbound_search_response_instance.to_dict()
# create an instance of InboundSearchResponse from a dict
inbound_search_response_from_dict = InboundSearchResponse.from_dict(inbound_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


