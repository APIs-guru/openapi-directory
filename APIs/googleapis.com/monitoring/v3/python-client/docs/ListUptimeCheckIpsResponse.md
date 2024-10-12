# ListUptimeCheckIpsResponse

The protocol for the ListUptimeCheckIps response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message&#39;s page_token field). NOTE: this field is not yet implemented | [optional] 
**uptime_check_ips** | [**List[UptimeCheckIp]**](UptimeCheckIp.md) | The returned list of IP addresses (including region and location) that the checkers run from. | [optional] 

## Example

```python
from openapi_client.models.list_uptime_check_ips_response import ListUptimeCheckIpsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUptimeCheckIpsResponse from a JSON string
list_uptime_check_ips_response_instance = ListUptimeCheckIpsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUptimeCheckIpsResponse.to_json())

# convert the object into a dict
list_uptime_check_ips_response_dict = list_uptime_check_ips_response_instance.to_dict()
# create an instance of ListUptimeCheckIpsResponse from a dict
list_uptime_check_ips_response_from_dict = ListUptimeCheckIpsResponse.from_dict(list_uptime_check_ips_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


