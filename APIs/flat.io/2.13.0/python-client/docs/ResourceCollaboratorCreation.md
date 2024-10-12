# ResourceCollaboratorCreation

Add a collaborator to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl_admin** | **bool** | &#x60;True&#x60; if the related user can can manage the current document, i.e. changing the document permissions and deleting the document  | [optional] [default to False]
**acl_read** | **bool** | &#x60;True&#x60; if the related user can read the score. (probably true if the user has a permission on the document).  | [optional] [default to True]
**acl_write** | **bool** | &#x60;True&#x60; if the related user can modify the score.  | [optional] [default to False]
**group** | **str** | The unique identifier of a Flat group | [optional] 
**user** | **str** | The unique identifier of a Flat user | [optional] 
**user_email** | **str** | Fill this field to invite an individual user by email.  | [optional] 
**user_token** | **str** | Token received in an invitation to join the score.  | [optional] 

## Example

```python
from openapi_client.models.resource_collaborator_creation import ResourceCollaboratorCreation

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCollaboratorCreation from a JSON string
resource_collaborator_creation_instance = ResourceCollaboratorCreation.from_json(json)
# print the JSON string representation of the object
print(ResourceCollaboratorCreation.to_json())

# convert the object into a dict
resource_collaborator_creation_dict = resource_collaborator_creation_instance.to_dict()
# create an instance of ResourceCollaboratorCreation from a dict
resource_collaborator_creation_from_dict = ResourceCollaboratorCreation.from_dict(resource_collaborator_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


