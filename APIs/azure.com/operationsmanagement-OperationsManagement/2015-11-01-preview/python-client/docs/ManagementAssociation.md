# ManagementAssociation

The container for solution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**ManagementAssociationProperties**](ManagementAssociationProperties.md) |  | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_association import ManagementAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementAssociation from a JSON string
management_association_instance = ManagementAssociation.from_json(json)
# print the JSON string representation of the object
print(ManagementAssociation.to_json())

# convert the object into a dict
management_association_dict = management_association_instance.to_dict()
# create an instance of ManagementAssociation from a dict
management_association_from_dict = ManagementAssociation.from_dict(management_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


