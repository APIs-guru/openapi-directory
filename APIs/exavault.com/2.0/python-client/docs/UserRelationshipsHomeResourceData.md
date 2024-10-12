# UserRelationshipsHomeResourceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of home directory resource. | [optional] 
**type** | **str** | Type is resource. | [optional] 

## Example

```python
from openapi_client.models.user_relationships_home_resource_data import UserRelationshipsHomeResourceData

# TODO update the JSON string below
json = "{}"
# create an instance of UserRelationshipsHomeResourceData from a JSON string
user_relationships_home_resource_data_instance = UserRelationshipsHomeResourceData.from_json(json)
# print the JSON string representation of the object
print(UserRelationshipsHomeResourceData.to_json())

# convert the object into a dict
user_relationships_home_resource_data_dict = user_relationships_home_resource_data_instance.to_dict()
# create an instance of UserRelationshipsHomeResourceData from a dict
user_relationships_home_resource_data_from_dict = UserRelationshipsHomeResourceData.from_dict(user_relationships_home_resource_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


