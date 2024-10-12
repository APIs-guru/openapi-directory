# ReportDeliveryDestination

The destination information for the delivery of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The name of the container where reports will be uploaded. | 
**resource_id** | **str** | The resource id of the storage account where reports will be delivered. | 
**root_folder_path** | **str** | The name of the directory where reports will be uploaded. | [optional] 

## Example

```python
from openapi_client.models.report_delivery_destination import ReportDeliveryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ReportDeliveryDestination from a JSON string
report_delivery_destination_instance = ReportDeliveryDestination.from_json(json)
# print the JSON string representation of the object
print(ReportDeliveryDestination.to_json())

# convert the object into a dict
report_delivery_destination_dict = report_delivery_destination_instance.to_dict()
# create an instance of ReportDeliveryDestination from a dict
report_delivery_destination_from_dict = ReportDeliveryDestination.from_dict(report_delivery_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


