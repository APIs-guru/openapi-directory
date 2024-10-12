# ListDescendantSecurityHealthAnalyticsCustomModulesResponse

Response message for listing descendant Security Health Analytics custom modules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If not empty, indicates that there may be more custom modules to be returned. | [optional] 
**security_health_analytics_custom_modules** | [**List[GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule]**](GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule.md) | Custom modules belonging to the requested parent and its descendants. | [optional] 

## Example

```python
from openapi_client.models.list_descendant_security_health_analytics_custom_modules_response import ListDescendantSecurityHealthAnalyticsCustomModulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDescendantSecurityHealthAnalyticsCustomModulesResponse from a JSON string
list_descendant_security_health_analytics_custom_modules_response_instance = ListDescendantSecurityHealthAnalyticsCustomModulesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDescendantSecurityHealthAnalyticsCustomModulesResponse.to_json())

# convert the object into a dict
list_descendant_security_health_analytics_custom_modules_response_dict = list_descendant_security_health_analytics_custom_modules_response_instance.to_dict()
# create an instance of ListDescendantSecurityHealthAnalyticsCustomModulesResponse from a dict
list_descendant_security_health_analytics_custom_modules_response_from_dict = ListDescendantSecurityHealthAnalyticsCustomModulesResponse.from_dict(list_descendant_security_health_analytics_custom_modules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


