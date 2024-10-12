# ProvisioningProfileFile

Provisioning profile fetch and store information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_id** | **str** | File id from secure file storage | [optional] 
**file_name** | **str** | Name of uploaded provisioning profile | [optional] 
**target_bundle_identifier** | **str** | Target the provisioning profile is used to sign | [optional] 
**upload_id** | **str** | Upload id to App Center File Upload Store | [optional] 

## Example

```python
from openapi_client.models.provisioning_profile_file import ProvisioningProfileFile

# TODO update the JSON string below
json = "{}"
# create an instance of ProvisioningProfileFile from a JSON string
provisioning_profile_file_instance = ProvisioningProfileFile.from_json(json)
# print the JSON string representation of the object
print(ProvisioningProfileFile.to_json())

# convert the object into a dict
provisioning_profile_file_dict = provisioning_profile_file_instance.to_dict()
# create an instance of ProvisioningProfileFile from a dict
provisioning_profile_file_from_dict = ProvisioningProfileFile.from_dict(provisioning_profile_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


