# AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments

Routing rules in production experiments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ramp_up_rules** | [**List[AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner]**](AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperimentsRampUpRulesInner.md) | List of ramp-up rules. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_change_vnet200_response_value_inner_properties_site_config_experiments import AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments from a JSON string
app_service_environments_change_vnet200_response_value_inner_properties_site_config_experiments_instance = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments.to_json())

# convert the object into a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_experiments_dict = app_service_environments_change_vnet200_response_value_inner_properties_site_config_experiments_instance.to_dict()
# create an instance of AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments from a dict
app_service_environments_change_vnet200_response_value_inner_properties_site_config_experiments_from_dict = AppServiceEnvironmentsChangeVnet200ResponseValueInnerPropertiesSiteConfigExperiments.from_dict(app_service_environments_change_vnet200_response_value_inner_properties_site_config_experiments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


