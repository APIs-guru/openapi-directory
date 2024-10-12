# GetOutboundOpenCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[GetOutboundOpenCounts200ResponseDaysInner]**](GetOutboundOpenCounts200ResponseDaysInner.md) |  | [optional] 
**opens** | **int** |  | [optional] 
**unique** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_outbound_open_counts200_response import GetOutboundOpenCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOutboundOpenCounts200Response from a JSON string
get_outbound_open_counts200_response_instance = GetOutboundOpenCounts200Response.from_json(json)
# print the JSON string representation of the object
print(GetOutboundOpenCounts200Response.to_json())

# convert the object into a dict
get_outbound_open_counts200_response_dict = get_outbound_open_counts200_response_instance.to_dict()
# create an instance of GetOutboundOpenCounts200Response from a dict
get_outbound_open_counts200_response_from_dict = GetOutboundOpenCounts200Response.from_dict(get_outbound_open_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


