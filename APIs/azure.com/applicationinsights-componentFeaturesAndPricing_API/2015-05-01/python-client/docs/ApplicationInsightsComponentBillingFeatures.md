# ApplicationInsightsComponentBillingFeatures

An Application Insights component billing features

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_billing_features** | **List[str]** | Current enabled pricing plan. When the component is in the Enterprise plan, this will list both &#39;Basic&#39; and &#39;Application Insights Enterprise&#39;. | [optional] 
**data_volume_cap** | [**ApplicationInsightsComponentDataVolumeCap**](ApplicationInsightsComponentDataVolumeCap.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_insights_component_billing_features import ApplicationInsightsComponentBillingFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInsightsComponentBillingFeatures from a JSON string
application_insights_component_billing_features_instance = ApplicationInsightsComponentBillingFeatures.from_json(json)
# print the JSON string representation of the object
print(ApplicationInsightsComponentBillingFeatures.to_json())

# convert the object into a dict
application_insights_component_billing_features_dict = application_insights_component_billing_features_instance.to_dict()
# create an instance of ApplicationInsightsComponentBillingFeatures from a dict
application_insights_component_billing_features_from_dict = ApplicationInsightsComponentBillingFeatures.from_dict(application_insights_component_billing_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


