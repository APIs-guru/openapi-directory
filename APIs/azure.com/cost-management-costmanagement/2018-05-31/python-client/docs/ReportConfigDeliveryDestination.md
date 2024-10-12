# ReportConfigDeliveryDestination

The destination information for the delivery of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The name of the container where reports will be uploaded. | 
**resource_id** | **str** | The resource id of the storage account where reports will be delivered. | 
**root_folder_path** | **str** | The name of the directory where reports will be uploaded. | [optional] 

## Example

```python
from openapi_client.models.report_config_delivery_destination import ReportConfigDeliveryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ReportConfigDeliveryDestination from a JSON string
report_config_delivery_destination_instance = ReportConfigDeliveryDestination.from_json(json)
# print the JSON string representation of the object
print(ReportConfigDeliveryDestination.to_json())

# convert the object into a dict
report_config_delivery_destination_dict = report_config_delivery_destination_instance.to_dict()
# create an instance of ReportConfigDeliveryDestination from a dict
report_config_delivery_destination_from_dict = ReportConfigDeliveryDestination.from_dict(report_config_delivery_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


