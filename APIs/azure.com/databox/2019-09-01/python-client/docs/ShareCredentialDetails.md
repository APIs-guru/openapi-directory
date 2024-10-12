# ShareCredentialDetails

Credential details of the shares in account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password for the share. | [optional] [readonly] 
**share_name** | **str** | Name of the share. | [optional] [readonly] 
**share_type** | **str** | Type of the share. | [optional] [readonly] 
**supported_access_protocols** | **List[str]** | Access protocols supported on the device. | [optional] [readonly] 
**user_name** | **str** | User name for the share. | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_credential_details import ShareCredentialDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ShareCredentialDetails from a JSON string
share_credential_details_instance = ShareCredentialDetails.from_json(json)
# print the JSON string representation of the object
print(ShareCredentialDetails.to_json())

# convert the object into a dict
share_credential_details_dict = share_credential_details_instance.to_dict()
# create an instance of ShareCredentialDetails from a dict
share_credential_details_from_dict = ShareCredentialDetails.from_dict(share_credential_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


