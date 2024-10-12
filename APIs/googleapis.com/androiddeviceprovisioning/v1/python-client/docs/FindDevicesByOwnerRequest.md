# FindDevicesByOwnerRequest

Request to find devices by customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_id** | **List[str]** | The list of customer IDs to search for. | [optional] 
**google_workspace_customer_id** | **List[str]** | The list of IDs of Google Workspace accounts to search for. | [optional] 
**limit** | **str** | Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive. | [optional] 
**page_token** | **str** | A token specifying which result page to return. | [optional] 
**section_type** | **str** | Required. The section type of the device&#39;s provisioning record. | [optional] 

## Example

```python
from openapi_client.models.find_devices_by_owner_request import FindDevicesByOwnerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FindDevicesByOwnerRequest from a JSON string
find_devices_by_owner_request_instance = FindDevicesByOwnerRequest.from_json(json)
# print the JSON string representation of the object
print(FindDevicesByOwnerRequest.to_json())

# convert the object into a dict
find_devices_by_owner_request_dict = find_devices_by_owner_request_instance.to_dict()
# create an instance of FindDevicesByOwnerRequest from a dict
find_devices_by_owner_request_from_dict = FindDevicesByOwnerRequest.from_dict(find_devices_by_owner_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


