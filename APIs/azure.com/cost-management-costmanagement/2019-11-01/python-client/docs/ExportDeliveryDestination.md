# ExportDeliveryDestination

The destination information for the delivery of the export. To allow access to a storage account, you must register the account's subscription with the Microsoft.CostManagementExports resource provider. This is required once per subscription. When creating an export in the Azure portal, it is done automatically, however API users need to register the subscription. For more information see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-supported-services .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | The name of the container where exports will be uploaded. | 
**resource_id** | **str** | The resource id of the storage account where exports will be delivered. | 
**root_folder_path** | **str** | The name of the directory where exports will be uploaded. | [optional] 

## Example

```python
from openapi_client.models.export_delivery_destination import ExportDeliveryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDeliveryDestination from a JSON string
export_delivery_destination_instance = ExportDeliveryDestination.from_json(json)
# print the JSON string representation of the object
print(ExportDeliveryDestination.to_json())

# convert the object into a dict
export_delivery_destination_dict = export_delivery_destination_instance.to_dict()
# create an instance of ExportDeliveryDestination from a dict
export_delivery_destination_from_dict = ExportDeliveryDestination.from_dict(export_delivery_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


