# BlobServicesListMetricDefinitions200ResponseValueInner

Metric definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_availabilities** | [**List[BlobServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner]**](BlobServicesListMetricDefinitions200ResponseValueInnerMetricAvailabilitiesInner.md) | Metric availabilities. | [optional] [readonly] 
**name** | [**BlobServicesListMetricDefinitions200ResponseValueInnerName**](BlobServicesListMetricDefinitions200ResponseValueInnerName.md) |  | [optional] 
**primary_aggregation_type** | **str** | Aggregate type. | [optional] [readonly] 
**unit** | **str** | Metric unit. | [optional] 

## Example

```python
from openapi_client.models.blob_services_list_metric_definitions200_response_value_inner import BlobServicesListMetricDefinitions200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of BlobServicesListMetricDefinitions200ResponseValueInner from a JSON string
blob_services_list_metric_definitions200_response_value_inner_instance = BlobServicesListMetricDefinitions200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(BlobServicesListMetricDefinitions200ResponseValueInner.to_json())

# convert the object into a dict
blob_services_list_metric_definitions200_response_value_inner_dict = blob_services_list_metric_definitions200_response_value_inner_instance.to_dict()
# create an instance of BlobServicesListMetricDefinitions200ResponseValueInner from a dict
blob_services_list_metric_definitions200_response_value_inner_from_dict = BlobServicesListMetricDefinitions200ResponseValueInner.from_dict(blob_services_list_metric_definitions200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


