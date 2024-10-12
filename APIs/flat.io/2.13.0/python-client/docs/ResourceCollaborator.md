# ResourceCollaborator

A collaborator of a score. The `userEmail` and `group` are only available if the requesting user is a collaborator of the related score (in this case these permissions will eventualy not be listed and exposed publicly). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acl_admin** | **bool** | &#x60;True&#x60; if the current user can manage the current document (i.e. share, delete)  If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the &#x60;capabilities&#x60; property as the end-user to have the complete possibilities with the collection.  | [optional] [default to False]
**acl_read** | **bool** | &#x60;True&#x60; if the current user can read the current document  | [optional] [default to False]
**acl_write** | **bool** | &#x60;True&#x60; if the current user can modify the current document.  If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the &#x60;capabilities&#x60; property as the end-user to have the complete possibilities with the collection.  | [optional] [default to False]
**is_collaborator** | **bool** | &#x60;True&#x60; if the current user is a collaborator of the current document (direct or via group).  | [optional] [default to False]
**collection** | **str** | If this object is a permission of a collection, this property will contain the unique identifier of the collection | [optional] 
**group** | [**Group**](Group.md) |  | [optional] 
**id** | **str** | The unique identifier of the permission | [optional] 
**invited** | **bool** | If this property is &#x60;true&#x60;, this is still a pending invitation  | [optional] 
**score** | **str** | If this object is a permission of a score, this property will contain the unique identifier of the score | [optional] 
**user** | [**UserPublic**](UserPublic.md) |  | [optional] 
**user_email** | **str** | If the collaborator is not a user of Flat yet, this field will contain his email.  | [optional] 

## Example

```python
from openapi_client.models.resource_collaborator import ResourceCollaborator

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCollaborator from a JSON string
resource_collaborator_instance = ResourceCollaborator.from_json(json)
# print the JSON string representation of the object
print(ResourceCollaborator.to_json())

# convert the object into a dict
resource_collaborator_dict = resource_collaborator_instance.to_dict()
# create an instance of ResourceCollaborator from a dict
resource_collaborator_from_dict = ResourceCollaborator.from_dict(resource_collaborator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


