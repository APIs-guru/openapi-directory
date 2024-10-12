# Assignment

An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_labels** | [**List[AssignmentGroupLabel]**](AssignmentGroupLabel.md) | Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example \&quot;env&#x3D;prod or env&#x3D;staging\&quot;. | [optional] 
**instance_name_prefixes** | **List[str]** | Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix&#x3D;\&quot;prod-\&quot;. Only supported for project-level policies. | [optional] 
**instances** | **List[str]** | Targets any of the instances specified. Instances are specified by their URI in the form &#x60;zones/[ZONE]/instances/[INSTANCE_NAME]&#x60;. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project. | [optional] 
**os_types** | [**List[AssignmentOsType]**](AssignmentOsType.md) | Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included. | [optional] 
**zones** | **List[str]** | Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone. | [optional] 

## Example

```python
from openapi_client.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


