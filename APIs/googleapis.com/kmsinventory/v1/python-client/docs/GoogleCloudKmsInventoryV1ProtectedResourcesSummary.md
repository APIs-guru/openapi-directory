# GoogleCloudKmsInventoryV1ProtectedResourcesSummary

Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_products** | **Dict[str, str]** | The number of resources protected by the key grouped by Cloud product. | [optional] 
**locations** | **Dict[str, str]** | The number of resources protected by the key grouped by region. | [optional] 
**name** | **str** | The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary | [optional] 
**project_count** | **int** | The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key. | [optional] 
**resource_count** | **str** | The total number of protected resources in the same Cloud organization as the key. | [optional] 
**resource_types** | **Dict[str, str]** | The number of resources protected by the key grouped by resource type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_kms_inventory_v1_protected_resources_summary import GoogleCloudKmsInventoryV1ProtectedResourcesSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudKmsInventoryV1ProtectedResourcesSummary from a JSON string
google_cloud_kms_inventory_v1_protected_resources_summary_instance = GoogleCloudKmsInventoryV1ProtectedResourcesSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudKmsInventoryV1ProtectedResourcesSummary.to_json())

# convert the object into a dict
google_cloud_kms_inventory_v1_protected_resources_summary_dict = google_cloud_kms_inventory_v1_protected_resources_summary_instance.to_dict()
# create an instance of GoogleCloudKmsInventoryV1ProtectedResourcesSummary from a dict
google_cloud_kms_inventory_v1_protected_resources_summary_from_dict = GoogleCloudKmsInventoryV1ProtectedResourcesSummary.from_dict(google_cloud_kms_inventory_v1_protected_resources_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


