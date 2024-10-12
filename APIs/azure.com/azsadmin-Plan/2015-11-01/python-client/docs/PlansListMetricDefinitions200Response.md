# PlansListMetricDefinitions200Response

List of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[PlansListMetricDefinitions200ResponseValueInner]**](PlansListMetricDefinitions200ResponseValueInner.md) | Array of metric definitions. | [optional] 

## Example

```python
from openapi_client.models.plans_list_metric_definitions200_response import PlansListMetricDefinitions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PlansListMetricDefinitions200Response from a JSON string
plans_list_metric_definitions200_response_instance = PlansListMetricDefinitions200Response.from_json(json)
# print the JSON string representation of the object
print(PlansListMetricDefinitions200Response.to_json())

# convert the object into a dict
plans_list_metric_definitions200_response_dict = plans_list_metric_definitions200_response_instance.to_dict()
# create an instance of PlansListMetricDefinitions200Response from a dict
plans_list_metric_definitions200_response_from_dict = PlansListMetricDefinitions200Response.from_dict(plans_list_metric_definitions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


