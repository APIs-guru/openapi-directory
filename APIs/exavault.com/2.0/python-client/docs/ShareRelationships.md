# ShareRelationships

Message, owner, resource, and notification relationships of the share. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[ShareRelationshipsMessage]**](ShareRelationshipsMessage.md) |  | [optional] 
**notifications** | [**List[ShareRelationshipsNotification]**](ShareRelationshipsNotification.md) |  | [optional] 
**owner** | [**ShareRelationshipsOwner**](ShareRelationshipsOwner.md) |  | [optional] 
**resources** | [**List[ShareRelationshipsResource]**](ShareRelationshipsResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.share_relationships import ShareRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of ShareRelationships from a JSON string
share_relationships_instance = ShareRelationships.from_json(json)
# print the JSON string representation of the object
print(ShareRelationships.to_json())

# convert the object into a dict
share_relationships_dict = share_relationships_instance.to_dict()
# create an instance of ShareRelationships from a dict
share_relationships_from_dict = ShareRelationships.from_dict(share_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


