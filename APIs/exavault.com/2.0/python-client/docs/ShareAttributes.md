# ShareAttributes

Attributes of the share including the name, path and share recipients. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_description** | **str** | Description of the share access rights. | [optional] 
**access_mode** | [**AccessMode**](AccessMode.md) |  | [optional] 
**created** | **datetime** | Timestamp of share creation. | [optional] 
**embed** | **bool** | True if share can be embedded. | [optional] 
**expiration** | **str** | Expiration date of the share. | [optional] 
**expired** | **bool** | True if the share has expired. | [optional] 
**file_drop_create_folders** | **bool** | Flag to show if separate folders should be created for each file upload to receive folder. | [optional] 
**form_id** | **int** | ID of the form. | [optional] 
**has_notification** | **bool** | True if share has notification. | [optional] 
**has_password** | **bool** | True if the share has password. | [optional] 
**hash** | **str** | Share hash. | [optional] 
**inherited** | **bool** | True if share inherited from parent folder. | [optional] 
**messages** | [**List[ShareMessage]**](ShareMessage.md) | Array of invitation messages. | [optional] 
**modified** | **datetime** | Timestamp of share modification. Can be &#x60;null&#x60; if it wasn&#39;t modified. | [optional] 
**name** | **str** | Share name. | [optional] 
**owner_hash** | **str** | Share owner&#39;s hash. | [optional] 
**paths** | **List[str]** | Path to the shared resource in your account. | [optional] 
**public** | **bool** | True if the share has a public url. | [optional] 
**recipients** | [**List[ShareRecipient]**](ShareRecipient.md) | Array of recipients. | [optional] 
**require_email** | **bool** | True if share requires email to access. | [optional] 
**resent** | **datetime** | Invitations resent date. Can be &#x60;null&#x60; if resent never happened. | [optional] 
**status** | **int** | Share activity status. Can be active (1) or deactivated (0). | [optional] 
**tracking_status** | **str** | Checks recipient received status and returns whether it&#39;s been received (&#x60;complete&#x60;,) partial received (&#x60;incomplete&#x60;,) or not received yet (&#x60;pending&#x60;.) | [optional] 
**type** | **str** | Type of share. | [optional] 

## Example

```python
from openapi_client.models.share_attributes import ShareAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ShareAttributes from a JSON string
share_attributes_instance = ShareAttributes.from_json(json)
# print the JSON string representation of the object
print(ShareAttributes.to_json())

# convert the object into a dict
share_attributes_dict = share_attributes_instance.to_dict()
# create an instance of ShareAttributes from a dict
share_attributes_from_dict = ShareAttributes.from_dict(share_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


