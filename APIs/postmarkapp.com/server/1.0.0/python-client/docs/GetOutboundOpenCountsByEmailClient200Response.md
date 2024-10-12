# GetOutboundOpenCountsByEmailClient200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **List[object]** |  | [optional] 
**desktop** | **int** |  | [optional] 
**mobile** | **int** |  | [optional] 
**unknown** | **int** |  | [optional] 
**web_mail** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_outbound_open_counts_by_email_client200_response import GetOutboundOpenCountsByEmailClient200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOutboundOpenCountsByEmailClient200Response from a JSON string
get_outbound_open_counts_by_email_client200_response_instance = GetOutboundOpenCountsByEmailClient200Response.from_json(json)
# print the JSON string representation of the object
print(GetOutboundOpenCountsByEmailClient200Response.to_json())

# convert the object into a dict
get_outbound_open_counts_by_email_client200_response_dict = get_outbound_open_counts_by_email_client200_response_instance.to_dict()
# create an instance of GetOutboundOpenCountsByEmailClient200Response from a dict
get_outbound_open_counts_by_email_client200_response_from_dict = GetOutboundOpenCountsByEmailClient200Response.from_dict(get_outbound_open_counts_by_email_client200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


