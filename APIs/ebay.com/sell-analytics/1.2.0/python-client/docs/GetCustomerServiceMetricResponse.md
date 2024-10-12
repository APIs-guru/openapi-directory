# GetCustomerServiceMetricResponse

This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_metrics** | [**List[DimensionMetric]**](DimensionMetric.md) | This container provides a seller&#39;s customer service metric performance for a given dimension. In the getCustomerServiceMetric request, specify values for the following request parameters to control the returned dimension and the associated metric values: customer_service_metric_type evaluation_type evaluation_marketplace_id | [optional] 
**evaluation_cycle** | [**EvaluationCycle**](EvaluationCycle.md) |  | [optional] 
**marketplace_id** | **str** | The eBay marketplace ID of the marketplace upon which the customer service metric evaluation is based. The customer_service_metric resource supports a limited set of marketplaces. For a complete list of the supported marketplaces, please see the Service metrics policy page. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.get_customer_service_metric_response import GetCustomerServiceMetricResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomerServiceMetricResponse from a JSON string
get_customer_service_metric_response_instance = GetCustomerServiceMetricResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomerServiceMetricResponse.to_json())

# convert the object into a dict
get_customer_service_metric_response_dict = get_customer_service_metric_response_instance.to_dict()
# create an instance of GetCustomerServiceMetricResponse from a dict
get_customer_service_metric_response_from_dict = GetCustomerServiceMetricResponse.from_dict(get_customer_service_metric_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


