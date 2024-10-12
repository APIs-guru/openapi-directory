# UsageRule

Usage configuration rules for the service. NOTE: Under development. Use this rule to configure unregistered calls for the service. Unregistered calls are calls that do not contain consumer project identity. (Example: calls that do not contain an API key). By default, API methods do not allow unregistered calls, and each method call must be identified by a consumer project identity. Use this rule to allow/disallow unregistered calls. Example of an API that wants to allow unregistered calls for entire service. usage: rules: - selector: \"*\" allow_unregistered_calls: true Example of a method that wants to allow unregistered calls. usage: rules: - selector: \"google.example.library.v1.LibraryService.CreateBook\" allow_unregistered_calls: true

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_unregistered_calls** | **bool** | If true, the selected method allows unregistered calls, e.g. calls that don&#39;t identify any user or application. | [optional] 
**selector** | **str** | Selects the methods to which this rule applies. Use &#39;*&#39; to indicate all methods in all APIs. Refer to selector for syntax details. | [optional] 
**skip_service_control** | **bool** | If true, the selected method should skip service control and the control plane features, such as quota and billing, will not be available. This flag is used by Google Cloud Endpoints to bypass checks for internal methods, such as service health check methods. | [optional] 

## Example

```python
from openapi_client.models.usage_rule import UsageRule

# TODO update the JSON string below
json = "{}"
# create an instance of UsageRule from a JSON string
usage_rule_instance = UsageRule.from_json(json)
# print the JSON string representation of the object
print(UsageRule.to_json())

# convert the object into a dict
usage_rule_dict = usage_rule_instance.to_dict()
# create an instance of UsageRule from a dict
usage_rule_from_dict = UsageRule.from_dict(usage_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


