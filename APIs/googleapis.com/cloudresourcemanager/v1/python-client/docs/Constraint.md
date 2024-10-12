# Constraint

A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about [Policies](/resource-manager/reference/rest/v1/Policy). `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `Policy` being defined or inherited for the resource in question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_constraint** | **object** | A &#x60;Constraint&#x60; that is either enforced or not. For example a constraint &#x60;constraints/compute.disableSerialPortAccess&#x60;. If it is enforced on a VM instance, serial port connections will not be opened to that instance. | [optional] 
**constraint_default** | **str** | The evaluation behavior of this constraint in the absence of &#39;Policy&#39;. | [optional] 
**description** | **str** | Detailed description of what this &#x60;Constraint&#x60; controls as well as how and where it is enforced. Mutable. | [optional] 
**display_name** | **str** | The human readable name. Mutable. | [optional] 
**list_constraint** | [**ListConstraint**](ListConstraint.md) |  | [optional] 
**name** | **str** | Immutable value, required to globally be unique. For example, &#x60;constraints/serviceuser.services&#x60; | [optional] 
**version** | **int** | Version of the &#x60;Constraint&#x60;. Default version is 0; | [optional] 

## Example

```python
from openapi_client.models.constraint import Constraint

# TODO update the JSON string below
json = "{}"
# create an instance of Constraint from a JSON string
constraint_instance = Constraint.from_json(json)
# print the JSON string representation of the object
print(Constraint.to_json())

# convert the object into a dict
constraint_dict = constraint_instance.to_dict()
# create an instance of Constraint from a dict
constraint_from_dict = Constraint.from_dict(constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


