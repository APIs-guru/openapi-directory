# DestinationStorageAccountDetails

Details for the destination storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_account_id** | **str** | Destination Storage Account Arm Id. | 

## Example

```python
from openapi_client.models.destination_storage_account_details import DestinationStorageAccountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationStorageAccountDetails from a JSON string
destination_storage_account_details_instance = DestinationStorageAccountDetails.from_json(json)
# print the JSON string representation of the object
print(DestinationStorageAccountDetails.to_json())

# convert the object into a dict
destination_storage_account_details_dict = destination_storage_account_details_instance.to_dict()
# create an instance of DestinationStorageAccountDetails from a dict
destination_storage_account_details_from_dict = DestinationStorageAccountDetails.from_dict(destination_storage_account_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


