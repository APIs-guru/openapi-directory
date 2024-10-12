# ManagementAssociationPropertiesList

the list of ManagementAssociation response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ManagementAssociation]**](ManagementAssociation.md) | List of Management Association properties within the subscription. | [optional] 

## Example

```python
from openapi_client.models.management_association_properties_list import ManagementAssociationPropertiesList

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementAssociationPropertiesList from a JSON string
management_association_properties_list_instance = ManagementAssociationPropertiesList.from_json(json)
# print the JSON string representation of the object
print(ManagementAssociationPropertiesList.to_json())

# convert the object into a dict
management_association_properties_list_dict = management_association_properties_list_instance.to_dict()
# create an instance of ManagementAssociationPropertiesList from a dict
management_association_properties_list_from_dict = ManagementAssociationPropertiesList.from_dict(management_association_properties_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


