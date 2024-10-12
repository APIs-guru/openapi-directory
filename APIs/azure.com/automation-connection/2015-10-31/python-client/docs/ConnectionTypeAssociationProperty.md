# ConnectionTypeAssociationProperty

The connection type property associated with the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the connection type. | [optional] 

## Example

```python
from openapi_client.models.connection_type_association_property import ConnectionTypeAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionTypeAssociationProperty from a JSON string
connection_type_association_property_instance = ConnectionTypeAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(ConnectionTypeAssociationProperty.to_json())

# convert the object into a dict
connection_type_association_property_dict = connection_type_association_property_instance.to_dict()
# create an instance of ConnectionTypeAssociationProperty from a dict
connection_type_association_property_from_dict = ConnectionTypeAssociationProperty.from_dict(connection_type_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


