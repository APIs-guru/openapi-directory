# ComplianceSnapshot

Result containing the properties and count of a ComplianceSnapshot request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of Findings matching. | [optional] 
**compliance_standard** | **str** | The compliance standard (ie CIS). | [optional] 
**compliance_version** | **str** | The compliance version (ie 1.3) in CIS 1.3. | [optional] 
**count** | **str** | Total count of findings for the given properties. | [optional] 
**leaf_container_resource** | **str** | The leaf container resource name that is closest to the snapshot. | [optional] 
**name** | **str** | The compliance snapshot name. Format: //sources//complianceSnapshots/ | [optional] 
**project_display_name** | **str** | The CRM resource display name that is closest to the snapshot the Findings belong to. | [optional] 
**snapshot_time** | **str** | The snapshot time of the snapshot. | [optional] 

## Example

```python
from openapi_client.models.compliance_snapshot import ComplianceSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceSnapshot from a JSON string
compliance_snapshot_instance = ComplianceSnapshot.from_json(json)
# print the JSON string representation of the object
print(ComplianceSnapshot.to_json())

# convert the object into a dict
compliance_snapshot_dict = compliance_snapshot_instance.to_dict()
# create an instance of ComplianceSnapshot from a dict
compliance_snapshot_from_dict = ComplianceSnapshot.from_dict(compliance_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


