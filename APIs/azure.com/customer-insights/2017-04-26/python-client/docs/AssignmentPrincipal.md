# AssignmentPrincipal

The AssignmentPrincipal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id being assigned to. | 
**principal_metadata** | **Dict[str, str]** | Other metadata for the principal. | [optional] 
**principal_type** | **str** | The Type of the principal ID. | 

## Example

```python
from openapi_client.models.assignment_principal import AssignmentPrincipal

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentPrincipal from a JSON string
assignment_principal_instance = AssignmentPrincipal.from_json(json)
# print the JSON string representation of the object
print(AssignmentPrincipal.to_json())

# convert the object into a dict
assignment_principal_dict = assignment_principal_instance.to_dict()
# create an instance of AssignmentPrincipal from a dict
assignment_principal_from_dict = AssignmentPrincipal.from_dict(assignment_principal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


