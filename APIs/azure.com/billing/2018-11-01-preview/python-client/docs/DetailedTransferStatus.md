# DetailedTransferStatus

Detailed transfer status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | [**Error**](Error.md) |  | [optional] 
**product_id** | **str** | Id of product being transferred. | [optional] [readonly] 
**product_type** | [**ProductType**](ProductType.md) |  | [optional] 
**transfer_status** | [**ProductTransferStatus**](ProductTransferStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.detailed_transfer_status import DetailedTransferStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DetailedTransferStatus from a JSON string
detailed_transfer_status_instance = DetailedTransferStatus.from_json(json)
# print the JSON string representation of the object
print(DetailedTransferStatus.to_json())

# convert the object into a dict
detailed_transfer_status_dict = detailed_transfer_status_instance.to_dict()
# create an instance of DetailedTransferStatus from a dict
detailed_transfer_status_from_dict = DetailedTransferStatus.from_dict(detailed_transfer_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


