# AnalyticsVersions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | The total count of versions. | [optional] 
**versions** | [**List[AnalyticsVersions200ResponseVersionsInner]**](AnalyticsVersions200ResponseVersionsInner.md) | List of version count. | [optional] 

## Example

```python
from openapi_client.models.analytics_versions200_response import AnalyticsVersions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsVersions200Response from a JSON string
analytics_versions200_response_instance = AnalyticsVersions200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsVersions200Response.to_json())

# convert the object into a dict
analytics_versions200_response_dict = analytics_versions200_response_instance.to_dict()
# create an instance of AnalyticsVersions200Response from a dict
analytics_versions200_response_from_dict = AnalyticsVersions200Response.from_dict(analytics_versions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


