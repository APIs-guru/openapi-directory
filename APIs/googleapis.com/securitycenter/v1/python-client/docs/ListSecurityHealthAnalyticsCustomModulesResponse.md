# ListSecurityHealthAnalyticsCustomModulesResponse

Response message for listing Security Health Analytics custom modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If not empty, indicates that there may be more custom modules to be returned. | [optional] 
**security_health_analytics_custom_modules** | [**List[GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule]**](GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.md) | Custom modules belonging to the requested parent. | [optional] 

## Example

```python
from openapi_client.models.list_security_health_analytics_custom_modules_response import ListSecurityHealthAnalyticsCustomModulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSecurityHealthAnalyticsCustomModulesResponse from a JSON string
list_security_health_analytics_custom_modules_response_instance = ListSecurityHealthAnalyticsCustomModulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSecurityHealthAnalyticsCustomModulesResponse.to_json())

# convert the object into a dict
list_security_health_analytics_custom_modules_response_dict = list_security_health_analytics_custom_modules_response_instance.to_dict()
# create an instance of ListSecurityHealthAnalyticsCustomModulesResponse from a dict
list_security_health_analytics_custom_modules_response_from_dict = ListSecurityHealthAnalyticsCustomModulesResponse.from_dict(list_security_health_analytics_custom_modules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


