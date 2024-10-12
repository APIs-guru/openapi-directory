# ManagementAssociationProperties

ManagementAssociation properties supported by the OperationsManagement resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The applicationId of the appliance for this association. | 

## Example

```python
from openapi_client.models.management_association_properties import ManagementAssociationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementAssociationProperties from a JSON string
management_association_properties_instance = ManagementAssociationProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementAssociationProperties.to_json())

# convert the object into a dict
management_association_properties_dict = management_association_properties_instance.to_dict()
# create an instance of ManagementAssociationProperties from a dict
management_association_properties_from_dict = ManagementAssociationProperties.from_dict(management_association_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


