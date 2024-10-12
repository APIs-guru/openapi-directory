# OutboundSearchResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[OutboundMessageDetail]**](OutboundMessageDetail.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.outbound_search_response import OutboundSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundSearchResponse from a JSON string
outbound_search_response_instance = OutboundSearchResponse.from_json(json)
# print the JSON string representation of the object
print(OutboundSearchResponse.to_json())

# convert the object into a dict
outbound_search_response_dict = outbound_search_response_instance.to_dict()
# create an instance of OutboundSearchResponse from a dict
outbound_search_response_from_dict = OutboundSearchResponse.from_dict(outbound_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


