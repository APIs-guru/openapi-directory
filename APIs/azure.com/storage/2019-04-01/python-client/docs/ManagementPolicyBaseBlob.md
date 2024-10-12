# ManagementPolicyBaseBlob

Management policy action for base blob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**DateAfterModification**](DateAfterModification.md) |  | [optional] 
**tier_to_archive** | [**DateAfterModification**](DateAfterModification.md) |  | [optional] 
**tier_to_cool** | [**DateAfterModification**](DateAfterModification.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_policy_base_blob import ManagementPolicyBaseBlob

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicyBaseBlob from a JSON string
management_policy_base_blob_instance = ManagementPolicyBaseBlob.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicyBaseBlob.to_json())

# convert the object into a dict
management_policy_base_blob_dict = management_policy_base_blob_instance.to_dict()
# create an instance of ManagementPolicyBaseBlob from a dict
management_policy_base_blob_from_dict = ManagementPolicyBaseBlob.from_dict(management_policy_base_blob_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


