# ExportDeliveryInfo

The delivery information associated with a export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ExportDeliveryDestination**](ExportDeliveryDestination.md) |  | 

## Example

```python
from openapi_client.models.export_delivery_info import ExportDeliveryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDeliveryInfo from a JSON string
export_delivery_info_instance = ExportDeliveryInfo.from_json(json)
# print the JSON string representation of the object
print(ExportDeliveryInfo.to_json())

# convert the object into a dict
export_delivery_info_dict = export_delivery_info_instance.to_dict()
# create an instance of ExportDeliveryInfo from a dict
export_delivery_info_from_dict = ExportDeliveryInfo.from_dict(export_delivery_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


