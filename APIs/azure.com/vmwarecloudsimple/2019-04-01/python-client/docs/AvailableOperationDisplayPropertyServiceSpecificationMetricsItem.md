# AvailableOperationDisplayPropertyServiceSpecificationMetricsItem

Available operation display property service specification metrics item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | Metric&#39;s aggregation type for e.g. (Average, Total) | 
**display_description** | **str** | Metric&#39;s description | 
**display_name** | **str** | Human readable metric&#39;s name | 
**name** | **str** | Metric&#39;s name/id | 
**unit** | **str** | Metric&#39;s unit | 

## Example

```python
from openapi_client.models.available_operation_display_property_service_specification_metrics_item import AvailableOperationDisplayPropertyServiceSpecificationMetricsItem

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableOperationDisplayPropertyServiceSpecificationMetricsItem from a JSON string
available_operation_display_property_service_specification_metrics_item_instance = AvailableOperationDisplayPropertyServiceSpecificationMetricsItem.from_json(json)
# print the JSON string representation of the object
print(AvailableOperationDisplayPropertyServiceSpecificationMetricsItem.to_json())

# convert the object into a dict
available_operation_display_property_service_specification_metrics_item_dict = available_operation_display_property_service_specification_metrics_item_instance.to_dict()
# create an instance of AvailableOperationDisplayPropertyServiceSpecificationMetricsItem from a dict
available_operation_display_property_service_specification_metrics_item_from_dict = AvailableOperationDisplayPropertyServiceSpecificationMetricsItem.from_dict(available_operation_display_property_service_specification_metrics_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


