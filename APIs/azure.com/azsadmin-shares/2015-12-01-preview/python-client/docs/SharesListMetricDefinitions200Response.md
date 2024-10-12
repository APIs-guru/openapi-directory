# SharesListMetricDefinitions200Response

Pageable list of metric definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[SharesListMetricDefinitions200ResponseValueInner]**](SharesListMetricDefinitions200ResponseValueInner.md) | List of metric definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.shares_list_metric_definitions200_response import SharesListMetricDefinitions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SharesListMetricDefinitions200Response from a JSON string
shares_list_metric_definitions200_response_instance = SharesListMetricDefinitions200Response.from_json(json)
# print the JSON string representation of the object
print(SharesListMetricDefinitions200Response.to_json())

# convert the object into a dict
shares_list_metric_definitions200_response_dict = shares_list_metric_definitions200_response_instance.to_dict()
# create an instance of SharesListMetricDefinitions200Response from a dict
shares_list_metric_definitions200_response_from_dict = SharesListMetricDefinitions200Response.from_dict(shares_list_metric_definitions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


