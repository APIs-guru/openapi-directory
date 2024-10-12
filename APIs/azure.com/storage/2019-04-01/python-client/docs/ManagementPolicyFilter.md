# ManagementPolicyFilter

Filters limit rule actions to a subset of blobs within the storage account. If multiple filters are defined, a logical AND is performed on all filters. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_types** | **List[str]** | An array of predefined enum values. Only blockBlob is supported. | 
**prefix_match** | **List[str]** | An array of strings for prefixes to be match. | [optional] 

## Example

```python
from openapi_client.models.management_policy_filter import ManagementPolicyFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicyFilter from a JSON string
management_policy_filter_instance = ManagementPolicyFilter.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicyFilter.to_json())

# convert the object into a dict
management_policy_filter_dict = management_policy_filter_instance.to_dict()
# create an instance of ManagementPolicyFilter from a dict
management_policy_filter_from_dict = ManagementPolicyFilter.from_dict(management_policy_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


