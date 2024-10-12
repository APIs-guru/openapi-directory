# GoogleChromePolicyVersionsV1FieldConstraints

Information about any range constraints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numeric_range_constraint** | [**GoogleChromePolicyVersionsV1NumericRangeConstraint**](GoogleChromePolicyVersionsV1NumericRangeConstraint.md) |  | [optional] 
**uploaded_file_constraints** | [**GoogleChromePolicyVersionsV1UploadedFileConstraints**](GoogleChromePolicyVersionsV1UploadedFileConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_field_constraints import GoogleChromePolicyVersionsV1FieldConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1FieldConstraints from a JSON string
google_chrome_policy_versions_v1_field_constraints_instance = GoogleChromePolicyVersionsV1FieldConstraints.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1FieldConstraints.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_field_constraints_dict = google_chrome_policy_versions_v1_field_constraints_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1FieldConstraints from a dict
google_chrome_policy_versions_v1_field_constraints_from_dict = GoogleChromePolicyVersionsV1FieldConstraints.from_dict(google_chrome_policy_versions_v1_field_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


