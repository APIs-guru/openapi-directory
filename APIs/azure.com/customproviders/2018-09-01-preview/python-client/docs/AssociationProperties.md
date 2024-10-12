# AssociationProperties

The properties of the association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the association. | [optional] [readonly] 
**target_resource_id** | **str** | The REST resource instance of the target resource for this association. | [optional] 

## Example

```python
from openapi_client.models.association_properties import AssociationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssociationProperties from a JSON string
association_properties_instance = AssociationProperties.from_json(json)
# print the JSON string representation of the object
print(AssociationProperties.to_json())

# convert the object into a dict
association_properties_dict = association_properties_instance.to_dict()
# create an instance of AssociationProperties from a dict
association_properties_from_dict = AssociationProperties.from_dict(association_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


