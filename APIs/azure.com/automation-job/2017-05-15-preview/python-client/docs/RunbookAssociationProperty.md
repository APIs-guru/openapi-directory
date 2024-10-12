# RunbookAssociationProperty

The runbook property associated with the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the runbook. | [optional] 

## Example

```python
from openapi_client.models.runbook_association_property import RunbookAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookAssociationProperty from a JSON string
runbook_association_property_instance = RunbookAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(RunbookAssociationProperty.to_json())

# convert the object into a dict
runbook_association_property_dict = runbook_association_property_instance.to_dict()
# create an instance of RunbookAssociationProperty from a dict
runbook_association_property_from_dict = RunbookAssociationProperty.from_dict(runbook_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


