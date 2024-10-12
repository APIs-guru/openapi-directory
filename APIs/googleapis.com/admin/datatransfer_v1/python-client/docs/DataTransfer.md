# DataTransfer

A Transfer resource represents the transfer of the ownership of user data between users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_data_transfers** | [**List[ApplicationDataTransfer]**](ApplicationDataTransfer.md) | The list of per-application data transfer resources. It contains details of the applications associated with this transfer resource, and also specifies the applications for which data transfer has to be done at the time of the transfer resource creation. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**id** | **str** | Read-only. The transfer&#39;s ID. | [optional] 
**kind** | **str** | Identifies the resource as a DataTransfer request. | [optional] [default to 'admin#datatransfer#DataTransfer']
**new_owner_user_id** | **str** | ID of the user to whom the data is being transferred. | [optional] 
**old_owner_user_id** | **str** | ID of the user whose data is being transferred. | [optional] 
**overall_transfer_status_code** | **str** | Read-only. Overall transfer status. | [optional] 
**request_time** | **datetime** | Read-only. The time at which the data transfer was requested. | [optional] 

## Example

```python
from openapi_client.models.data_transfer import DataTransfer

# TODO update the JSON string below
json = "{}"
# create an instance of DataTransfer from a JSON string
data_transfer_instance = DataTransfer.from_json(json)
# print the JSON string representation of the object
print(DataTransfer.to_json())

# convert the object into a dict
data_transfer_dict = data_transfer_instance.to_dict()
# create an instance of DataTransfer from a dict
data_transfer_from_dict = DataTransfer.from_dict(data_transfer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


