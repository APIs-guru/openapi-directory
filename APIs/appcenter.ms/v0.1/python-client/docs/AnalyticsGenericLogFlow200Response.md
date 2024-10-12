# AnalyticsGenericLogFlow200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[AnalyticsGenericLogFlow200ResponseLogsInner]**](AnalyticsGenericLogFlow200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.analytics_generic_log_flow200_response import AnalyticsGenericLogFlow200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsGenericLogFlow200Response from a JSON string
analytics_generic_log_flow200_response_instance = AnalyticsGenericLogFlow200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsGenericLogFlow200Response.to_json())

# convert the object into a dict
analytics_generic_log_flow200_response_dict = analytics_generic_log_flow200_response_instance.to_dict()
# create an instance of AnalyticsGenericLogFlow200Response from a dict
analytics_generic_log_flow200_response_from_dict = AnalyticsGenericLogFlow200Response.from_dict(analytics_generic_log_flow200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


