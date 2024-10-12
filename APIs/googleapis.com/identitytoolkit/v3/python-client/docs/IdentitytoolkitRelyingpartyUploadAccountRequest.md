# IdentitytoolkitRelyingpartyUploadAccountRequest

Request to upload user account in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_overwrite** | **bool** | Whether allow overwrite existing account when user local_id exists. | [optional] 
**block_size** | **int** |  | [optional] 
**cpu_mem_cost** | **int** | The following 4 fields are for standard scrypt algorithm. | [optional] 
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**dk_len** | **int** |  | [optional] 
**hash_algorithm** | **str** | The password hash algorithm. | [optional] 
**memory_cost** | **int** | Memory cost for hash calculation. Used by scrypt similar algorithms. | [optional] 
**parallelization** | **int** |  | [optional] 
**rounds** | **int** | Rounds for hash calculation. Used by scrypt and similar algorithms. | [optional] 
**salt_separator** | **bytearray** | The salt separator. | [optional] 
**sanity_check** | **bool** | If true, backend will do sanity check(including duplicate email and federated id) when uploading account. | [optional] 
**signer_key** | **bytearray** | The key for to hash the password. | [optional] 
**target_project_id** | **str** | Specify which project (field value is actually project id) to operate. Only used when provided credential. | [optional] 
**users** | [**List[UserInfo]**](UserInfo.md) | The account info to be stored. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_upload_account_request import IdentitytoolkitRelyingpartyUploadAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyUploadAccountRequest from a JSON string
identitytoolkit_relyingparty_upload_account_request_instance = IdentitytoolkitRelyingpartyUploadAccountRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyUploadAccountRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_upload_account_request_dict = identitytoolkit_relyingparty_upload_account_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyUploadAccountRequest from a dict
identitytoolkit_relyingparty_upload_account_request_from_dict = IdentitytoolkitRelyingpartyUploadAccountRequest.from_dict(identitytoolkit_relyingparty_upload_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


