# LicenseAssignmentInsert

Representation of a license assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | Email id of the user | [optional] 

## Example

```python
from openapi_client.models.license_assignment_insert import LicenseAssignmentInsert

# TODO update the JSON string below
json = "{}"
# create an instance of LicenseAssignmentInsert from a JSON string
license_assignment_insert_instance = LicenseAssignmentInsert.from_json(json)
# print the JSON string representation of the object
print(LicenseAssignmentInsert.to_json())

# convert the object into a dict
license_assignment_insert_dict = license_assignment_insert_instance.to_dict()
# create an instance of LicenseAssignmentInsert from a dict
license_assignment_insert_from_dict = LicenseAssignmentInsert.from_dict(license_assignment_insert_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


