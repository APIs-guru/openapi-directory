# GetOutboundOpenCountsByPlatform200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | [**List[GetOutboundOpenCountsByPlatform200ResponseDaysInner]**](GetOutboundOpenCountsByPlatform200ResponseDaysInner.md) |  | [optional] 
**desktop** | **int** |  | [optional] 
**mobile** | **int** |  | [optional] 
**unknown** | **int** |  | [optional] 
**web_mail** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_outbound_open_counts_by_platform200_response import GetOutboundOpenCountsByPlatform200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOutboundOpenCountsByPlatform200Response from a JSON string
get_outbound_open_counts_by_platform200_response_instance = GetOutboundOpenCountsByPlatform200Response.from_json(json)
# print the JSON string representation of the object
print(GetOutboundOpenCountsByPlatform200Response.to_json())

# convert the object into a dict
get_outbound_open_counts_by_platform200_response_dict = get_outbound_open_counts_by_platform200_response_instance.to_dict()
# create an instance of GetOutboundOpenCountsByPlatform200Response from a dict
get_outbound_open_counts_by_platform200_response_from_dict = GetOutboundOpenCountsByPlatform200Response.from_dict(get_outbound_open_counts_by_platform200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


