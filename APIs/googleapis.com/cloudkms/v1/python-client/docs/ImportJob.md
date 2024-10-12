# ImportJob

An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a \"wrapping key\", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attestation** | [**KeyOperationAttestation**](KeyOperationAttestation.md) |  | [optional] 
**create_time** | **str** | Output only. The time at which this ImportJob was created. | [optional] [readonly] 
**expire_event_time** | **str** | Output only. The time this ImportJob expired. Only present if state is EXPIRED. | [optional] [readonly] 
**expire_time** | **str** | Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material. | [optional] [readonly] 
**generate_time** | **str** | Output only. The time this ImportJob&#39;s key material was generated. | [optional] [readonly] 
**import_method** | **str** | Required. Immutable. The wrapping method to be used for incoming key material. | [optional] 
**name** | **str** | Output only. The resource name for this ImportJob in the format &#x60;projects/*/locations/*/keyRings/*/importJobs/*&#x60;. | [optional] [readonly] 
**protection_level** | **str** | Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into. | [optional] 
**public_key** | [**WrappingPublicKey**](WrappingPublicKey.md) |  | [optional] 
**state** | **str** | Output only. The current state of the ImportJob, indicating if it can be used. | [optional] [readonly] 

## Example

```python
from openapi_client.models.import_job import ImportJob

# TODO update the JSON string below
json = "{}"
# create an instance of ImportJob from a JSON string
import_job_instance = ImportJob.from_json(json)
# print the JSON string representation of the object
print(ImportJob.to_json())

# convert the object into a dict
import_job_dict = import_job_instance.to_dict()
# create an instance of ImportJob from a dict
import_job_from_dict = ImportJob.from_dict(import_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


