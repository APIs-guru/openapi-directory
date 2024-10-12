# CreateNetworkPiiRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasets** | **List[str]** | The datasets related to the provided key that should be deleted. Only applies to \&quot;delete\&quot; requests. The value \&quot;all\&quot; will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user) | [optional] 
**email** | **str** | The email of a network user account. Only applies to \&quot;delete\&quot; requests. | [optional] 
**mac** | **str** | The MAC of a network client device. Applies to both \&quot;restrict processing\&quot; and \&quot;delete\&quot; requests. | [optional] 
**sm_device_id** | **str** | The sm_device_id of a Systems Manager device. The only way to \&quot;restrict processing\&quot; or \&quot;delete\&quot; a Systems Manager device. Must include \&quot;device\&quot; in the dataset for a \&quot;delete\&quot; request to destroy the device. | [optional] 
**sm_user_id** | **str** | The sm_user_id of a Systems Manager user. The only way to \&quot;restrict processing\&quot; or \&quot;delete\&quot; a Systems Manager user. Must include \&quot;user\&quot; in the dataset for a \&quot;delete\&quot; request to destroy the user. | [optional] 
**type** | **str** | One of \&quot;delete\&quot; or \&quot;restrict processing\&quot; | [optional] 
**username** | **str** | The username of a network log in. Only applies to \&quot;delete\&quot; requests. | [optional] 

## Example

```python
from openapi_client.models.create_network_pii_request_request import CreateNetworkPiiRequestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkPiiRequestRequest from a JSON string
create_network_pii_request_request_instance = CreateNetworkPiiRequestRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkPiiRequestRequest.to_json())

# convert the object into a dict
create_network_pii_request_request_dict = create_network_pii_request_request_instance.to_dict()
# create an instance of CreateNetworkPiiRequestRequest from a dict
create_network_pii_request_request_from_dict = CreateNetworkPiiRequestRequest.from_dict(create_network_pii_request_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


