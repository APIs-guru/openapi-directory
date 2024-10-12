# ListUptimeCheckConfigsResponse

The protocol for the ListUptimeCheckConfigs response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | This field represents the pagination token to retrieve the next page of results. If the value is empty, it means no further results for the request. To retrieve the next page of results, the value of the next_page_token is passed to the subsequent List method call (in the request message&#39;s page_token field). | [optional] 
**total_size** | **int** | The total number of Uptime check configurations for the project, irrespective of any pagination. | [optional] 
**uptime_check_configs** | [**List[UptimeCheckConfig]**](UptimeCheckConfig.md) | The returned Uptime check configurations. | [optional] 

## Example

```python
from openapi_client.models.list_uptime_check_configs_response import ListUptimeCheckConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUptimeCheckConfigsResponse from a JSON string
list_uptime_check_configs_response_instance = ListUptimeCheckConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListUptimeCheckConfigsResponse.to_json())

# convert the object into a dict
list_uptime_check_configs_response_dict = list_uptime_check_configs_response_instance.to_dict()
# create an instance of ListUptimeCheckConfigsResponse from a dict
list_uptime_check_configs_response_from_dict = ListUptimeCheckConfigsResponse.from_dict(list_uptime_check_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


