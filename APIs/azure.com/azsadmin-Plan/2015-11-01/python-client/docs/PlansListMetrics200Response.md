# PlansListMetrics200Response

List of metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[PlansListMetrics200ResponseValueInner]**](PlansListMetrics200ResponseValueInner.md) | List of metrics. | [optional] 

## Example

```python
from openapi_client.models.plans_list_metrics200_response import PlansListMetrics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PlansListMetrics200Response from a JSON string
plans_list_metrics200_response_instance = PlansListMetrics200Response.from_json(json)
# print the JSON string representation of the object
print(PlansListMetrics200Response.to_json())

# convert the object into a dict
plans_list_metrics200_response_dict = plans_list_metrics200_response_instance.to_dict()
# create an instance of PlansListMetrics200Response from a dict
plans_list_metrics200_response_from_dict = PlansListMetrics200Response.from_dict(plans_list_metrics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


