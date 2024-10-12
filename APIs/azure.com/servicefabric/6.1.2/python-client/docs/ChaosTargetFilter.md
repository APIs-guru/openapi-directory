# ChaosTargetFilter

Defines all filters for targeted Chaos faults, for example, faulting only certain node types or faulting only certain applications. If ChaosTargetFilter is not used, Chaos faults all cluster entities. If ChaosTargetFilter is used, Chaos faults only the entities that meet the ChaosTargetFilter specification. NodeTypeInclusionList and ApplicationInclusionList allow a union semantics only. It is not possible to specify an intersection of NodeTypeInclusionList and ApplicationInclusionList. For example, it is not possible to specify \"fault this application only when it is on that node type.\" Once an entity is included in either NodeTypeInclusionList or ApplicationInclusionList, that entity cannot be excluded using ChaosTargetFilter. Even if applicationX does not appear in ApplicationInclusionList, in some Chaos iteration applicationX can be faulted because it happens to be on a node of nodeTypeY that is included in NodeTypeInclusionList. If both NodeTypeInclusionList and ApplicationInclusionList are null or empty, an ArgumentException is thrown. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_inclusion_list** | **List[str]** | A list of application URI&#39;s to include in Chaos faults. All replicas belonging to services of these applications are amenable to replica faults (restart replica, remove replica, move primary, and move secondary) by Chaos. Chaos may restart a code package only if the code package hosts replicas of these applications only. If an application does not appear in this list, it can still be faulted in some Chaos iteration if the application ends up on a node of a node type that is included in NodeTypeInclusionList. However if applicationX is tied to nodeTypeY through placement constraints and applicationX is absent from ApplicationInclusionList and nodeTypeY is absent from NodeTypeInclusionList, then applicationX will never be faulted. At most 1000 application names can be included in this list, to increase this number, a config upgrade is required for MaxNumberOfApplicationsInChaosEntityFilter configuration.  | [optional] 
**node_type_inclusion_list** | **List[str]** | A list of node types to include in Chaos faults. All types of faults (restart node, restart code package, remove replica, restart replica, move primary, and move secondary) are enabled for the nodes of these node types. If a nodetype (say NodeTypeX) does not appear in the NodeTypeInclusionList, then node level faults (like NodeRestart) will never be enabled for the nodes of NodeTypeX, but code package and replica faults can still be enabled for NodeTypeX if an application in the ApplicationInclusionList. happens to reside on a node of NodeTypeX. At most 100 node type names can be included in this list, to increase this number, a config upgrade is required for MaxNumberOfNodeTypesInChaosEntityFilter configuration.  | [optional] 

## Example

```python
from openapi_client.models.chaos_target_filter import ChaosTargetFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosTargetFilter from a JSON string
chaos_target_filter_instance = ChaosTargetFilter.from_json(json)
# print the JSON string representation of the object
print(ChaosTargetFilter.to_json())

# convert the object into a dict
chaos_target_filter_dict = chaos_target_filter_instance.to_dict()
# create an instance of ChaosTargetFilter from a dict
chaos_target_filter_from_dict = ChaosTargetFilter.from_dict(chaos_target_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


