# GoogleAnalyticsAdminV1alphaParameterMutation

Defines an event parameter to mutate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **str** | Required. The name of the parameter to mutate. This value must: * be less than 40 characters. * be unique across across all mutations within the rule * consist only of letters, digits or _ (underscores) For event edit rules, the name may also be set to &#39;event_name&#39; to modify the event_name in place. | [optional] 
**parameter_value** | **str** | Required. The value mutation to perform. * Must be less than 100 characters. * To specify a constant value for the param, use the value&#39;s string. * To copy value from another parameter, use syntax like \&quot;[[other_parameter]]\&quot; For more details, see this [help center article](https://support.google.com/analytics/answer/10085872#modify-an-event&amp;zippy&#x3D;%2Cin-this-article%2Cmodify-parameters). | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_parameter_mutation import GoogleAnalyticsAdminV1alphaParameterMutation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaParameterMutation from a JSON string
google_analytics_admin_v1alpha_parameter_mutation_instance = GoogleAnalyticsAdminV1alphaParameterMutation.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaParameterMutation.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_parameter_mutation_dict = google_analytics_admin_v1alpha_parameter_mutation_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaParameterMutation from a dict
google_analytics_admin_v1alpha_parameter_mutation_from_dict = GoogleAnalyticsAdminV1alphaParameterMutation.from_dict(google_analytics_admin_v1alpha_parameter_mutation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


