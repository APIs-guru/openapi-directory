# AppServicePlansList200ResponseValueInnerProperties

AppServicePlan resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_offer_expiration_time** | **datetime** | The time when the server farm free offer expires. | [optional] 
**geo_region** | **str** | Geographical location for the App Service plan. | [optional] [readonly] 
**hosting_environment_profile** | [**AppServicePlansList200ResponseValueInnerPropertiesHostingEnvironmentProfile**](AppServicePlansList200ResponseValueInnerPropertiesHostingEnvironmentProfile.md) |  | [optional] 
**hyper_v** | **bool** | If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise. | [optional] [default to False]
**is_spot** | **bool** | If &lt;code&gt;true&lt;/code&gt;, this App Service Plan owns spot instances. | [optional] 
**is_xenon** | **bool** | Obsolete: If Hyper-V container app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise. | [optional] [default to False]
**maximum_elastic_worker_count** | **int** | Maximum number of total workers allowed for this ElasticScaleEnabled App Service Plan | [optional] 
**maximum_number_of_workers** | **int** | Maximum number of instances that can be assigned to this App Service plan. | [optional] [readonly] 
**number_of_sites** | **int** | Number of apps assigned to this App Service plan. | [optional] [readonly] 
**per_site_scaling** | **bool** | If &lt;code&gt;true&lt;/code&gt;, apps assigned to this App Service plan can be scaled independently. If &lt;code&gt;false&lt;/code&gt;, apps assigned to this App Service plan will scale to all instances of the plan. | [optional] [default to False]
**provisioning_state** | **str** | Provisioning state of the App Service Environment. | [optional] [readonly] 
**reserved** | **bool** | If Linux app service plan &lt;code&gt;true&lt;/code&gt;, &lt;code&gt;false&lt;/code&gt; otherwise. | [optional] [default to False]
**resource_group** | **str** | Resource group of the App Service plan. | [optional] [readonly] 
**spot_expiration_time** | **datetime** | The time when the server farm expires. Valid only if it is a spot server farm. | [optional] 
**status** | **str** | App Service plan status. | [optional] [readonly] 
**subscription** | **str** | App Service plan subscription. | [optional] [readonly] 
**target_worker_count** | **int** | Scaling worker count. | [optional] 
**target_worker_size_id** | **int** | Scaling worker size ID. | [optional] 
**worker_tier_name** | **str** | Target worker tier assigned to the App Service plan. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list200_response_value_inner_properties import AppServicePlansList200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansList200ResponseValueInnerProperties from a JSON string
app_service_plans_list200_response_value_inner_properties_instance = AppServicePlansList200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansList200ResponseValueInnerProperties.to_json())

# convert the object into a dict
app_service_plans_list200_response_value_inner_properties_dict = app_service_plans_list200_response_value_inner_properties_instance.to_dict()
# create an instance of AppServicePlansList200ResponseValueInnerProperties from a dict
app_service_plans_list200_response_value_inner_properties_from_dict = AppServicePlansList200ResponseValueInnerProperties.from_dict(app_service_plans_list200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


