# GoogleCloudKmsInventoryV1ProtectedResource

Metadata about a resource protected by a Cloud KMS key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_product** | **str** | The Cloud product that owns the resource. Example: &#x60;compute&#x60; | [optional] 
**create_time** | **str** | Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0. | [optional] [readonly] 
**crypto_key_version** | **str** | The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl&#x3D;en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions. | [optional] 
**crypto_key_versions** | **List[str]** | The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl&#x3D;en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto_key_version. | [optional] 
**labels** | **Dict[str, str]** | A key-value pair of the resource&#39;s labels (v1) to their values. | [optional] 
**location** | **str** | Location can be &#x60;global&#x60;, regional like &#x60;us-east1&#x60;, or zonal like &#x60;us-west1-b&#x60;. | [optional] 
**name** | **str** | The full resource name of the resource. Example: &#x60;//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1&#x60;. | [optional] 
**project** | **str** | Format: &#x60;projects/{PROJECT_NUMBER}&#x60;. | [optional] 
**project_id** | **str** | The ID of the project that owns the resource. | [optional] 
**resource_type** | **str** | Example: &#x60;compute.googleapis.com/Disk&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_inventory_v1_protected_resource import GoogleCloudKmsInventoryV1ProtectedResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsInventoryV1ProtectedResource from a JSON string
google_cloud_kms_inventory_v1_protected_resource_instance = GoogleCloudKmsInventoryV1ProtectedResource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsInventoryV1ProtectedResource.to_json())

# convert the object into a dict
google_cloud_kms_inventory_v1_protected_resource_dict = google_cloud_kms_inventory_v1_protected_resource_instance.to_dict()
# create an instance of GoogleCloudKmsInventoryV1ProtectedResource from a dict
google_cloud_kms_inventory_v1_protected_resource_from_dict = GoogleCloudKmsInventoryV1ProtectedResource.from_dict(google_cloud_kms_inventory_v1_protected_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


