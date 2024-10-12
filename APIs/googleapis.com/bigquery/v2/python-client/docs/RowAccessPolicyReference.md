# RowAccessPolicyReference

Id path of a row access policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required. The ID of the dataset containing this row access policy. | [optional] 
**policy_id** | **str** | Required. The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. | [optional] 
**project_id** | **str** | Required. The ID of the project containing this row access policy. | [optional] 
**table_id** | **str** | Required. The ID of the table containing this row access policy. | [optional] 

## Example

```python
from openapi_client.models.row_access_policy_reference import RowAccessPolicyReference

# TODO update the JSON string below
json = "{}"
# create an instance of RowAccessPolicyReference from a JSON string
row_access_policy_reference_instance = RowAccessPolicyReference.from_json(json)
# print the JSON string representation of the object
print(RowAccessPolicyReference.to_json())

# convert the object into a dict
row_access_policy_reference_dict = row_access_policy_reference_instance.to_dict()
# create an instance of RowAccessPolicyReference from a dict
row_access_policy_reference_from_dict = RowAccessPolicyReference.from_dict(row_access_policy_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


