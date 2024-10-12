# CollectionUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**email** | **str** | Email address of the user | [optional] 
**first_name** | **str** | First name of the user | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**last_name** | **str** | Last name of the user | [optional] 
**name** | **str** | Full name of the user | [optional] 
**photo_url** | **str** | The URL of the photo of a person. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.collection_user import CollectionUser

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionUser from a JSON string
collection_user_instance = CollectionUser.from_json(json)
# print the JSON string representation of the object
print(CollectionUser.to_json())

# convert the object into a dict
collection_user_dict = collection_user_instance.to_dict()
# create an instance of CollectionUser from a dict
collection_user_from_dict = CollectionUser.from_dict(collection_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


