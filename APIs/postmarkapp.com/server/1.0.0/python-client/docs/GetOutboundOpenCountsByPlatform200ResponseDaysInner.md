# GetOutboundOpenCountsByPlatform200ResponseDaysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**desktop** | **int** |  | [optional] 
**mobile** | **int** |  | [optional] 
**unknown** | **int** |  | [optional] 
**web_mail** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_outbound_open_counts_by_platform200_response_days_inner import GetOutboundOpenCountsByPlatform200ResponseDaysInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOutboundOpenCountsByPlatform200ResponseDaysInner from a JSON string
get_outbound_open_counts_by_platform200_response_days_inner_instance = GetOutboundOpenCountsByPlatform200ResponseDaysInner.from_json(json)
# print the JSON string representation of the object
print(GetOutboundOpenCountsByPlatform200ResponseDaysInner.to_json())

# convert the object into a dict
get_outbound_open_counts_by_platform200_response_days_inner_dict = get_outbound_open_counts_by_platform200_response_days_inner_instance.to_dict()
# create an instance of GetOutboundOpenCountsByPlatform200ResponseDaysInner from a dict
get_outbound_open_counts_by_platform200_response_days_inner_from_dict = GetOutboundOpenCountsByPlatform200ResponseDaysInner.from_dict(get_outbound_open_counts_by_platform200_response_days_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


