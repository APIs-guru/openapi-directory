# AnalyticsListAudiences200Response

List of audiences.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] 
**values** | [**List[AnalyticsListAudiences200ResponseValuesInner]**](AnalyticsListAudiences200ResponseValuesInner.md) | List of audiences. | 

## Example

```python
from openapi_client.models.analytics_list_audiences200_response import AnalyticsListAudiences200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsListAudiences200Response from a JSON string
analytics_list_audiences200_response_instance = AnalyticsListAudiences200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsListAudiences200Response.to_json())

# convert the object into a dict
analytics_list_audiences200_response_dict = analytics_list_audiences200_response_instance.to_dict()
# create an instance of AnalyticsListAudiences200Response from a dict
analytics_list_audiences200_response_from_dict = AnalyticsListAudiences200Response.from_dict(analytics_list_audiences200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


