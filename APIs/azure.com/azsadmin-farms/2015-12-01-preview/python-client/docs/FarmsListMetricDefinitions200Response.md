# FarmsListMetricDefinitions200Response

Pageable list of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[FarmsListMetricDefinitions200ResponseValueInner]**](FarmsListMetricDefinitions200ResponseValueInner.md) | List of metric definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.farms_list_metric_definitions200_response import FarmsListMetricDefinitions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of FarmsListMetricDefinitions200Response from a JSON string
farms_list_metric_definitions200_response_instance = FarmsListMetricDefinitions200Response.from_json(json)
# print the JSON string representation of the object
print(FarmsListMetricDefinitions200Response.to_json())

# convert the object into a dict
farms_list_metric_definitions200_response_dict = farms_list_metric_definitions200_response_instance.to_dict()
# create an instance of FarmsListMetricDefinitions200Response from a dict
farms_list_metric_definitions200_response_from_dict = FarmsListMetricDefinitions200Response.from_dict(farms_list_metric_definitions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


