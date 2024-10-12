# AdvisorProperties

Properties for a Database, Server or Elastic Pool Advisor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisor_status** | **str** | Gets the status of availability of this advisor to customers. Possible values are &#39;GA&#39;, &#39;PublicPreview&#39;, &#39;LimitedPublicPreview&#39; and &#39;PrivatePreview&#39;. | [optional] [readonly] 
**auto_execute_status** | **str** | Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are &#39;Enabled&#39; and &#39;Disabled&#39; | 
**auto_execute_status_inherited_from** | **str** | Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are &#39;Subscription&#39;, &#39;Server&#39;, &#39;ElasticPool&#39;, &#39;Database&#39; and &#39;Default&#39; (when status is not explicitly set on any level). | [optional] [readonly] 
**last_checked** | **datetime** | Gets the time when the current resource was analyzed for recommendations by this advisor. | [optional] [readonly] 
**recommendations_status** | **str** | Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, &#39;Ok&#39; (Recommendations available),LowActivity (not enough workload to analyze), &#39;DbSeemsTuned&#39; (Database is doing well), etc. | [optional] [readonly] 
**recommended_actions** | [**List[RecommendedAction]**](RecommendedAction.md) | Gets the recommended actions for this advisor. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advisor_properties import AdvisorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AdvisorProperties from a JSON string
advisor_properties_instance = AdvisorProperties.from_json(json)
# print the JSON string representation of the object
print(AdvisorProperties.to_json())

# convert the object into a dict
advisor_properties_dict = advisor_properties_instance.to_dict()
# create an instance of AdvisorProperties from a dict
advisor_properties_from_dict = AdvisorProperties.from_dict(advisor_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


