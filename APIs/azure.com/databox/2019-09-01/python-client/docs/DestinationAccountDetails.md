# DestinationAccountDetails

Details of the destination storage accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Arm Id of the destination where the data has to be moved. | [optional] 
**data_destination_type** | **str** | Data Destination Type. | 
**share_password** | **str** | Share password to be shared by all shares in SA. | [optional] 

## Example

```python
from openapi_client.models.destination_account_details import DestinationAccountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationAccountDetails from a JSON string
destination_account_details_instance = DestinationAccountDetails.from_json(json)
# print the JSON string representation of the object
print(DestinationAccountDetails.to_json())

# convert the object into a dict
destination_account_details_dict = destination_account_details_instance.to_dict()
# create an instance of DestinationAccountDetails from a dict
destination_account_details_from_dict = DestinationAccountDetails.from_dict(destination_account_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


