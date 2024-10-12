# ObjectOwner

The owner of the object. This will always be the uploader of the object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | The entity, in the form user-userId. | [optional] 
**entity_id** | **str** | The ID for the entity. | [optional] 

## Example

```python
from openapi_client.models.object_owner import ObjectOwner

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectOwner from a JSON string
object_owner_instance = ObjectOwner.from_json(json)
# print the JSON string representation of the object
print(ObjectOwner.to_json())

# convert the object into a dict
object_owner_dict = object_owner_instance.to_dict()
# create an instance of ObjectOwner from a dict
object_owner_from_dict = ObjectOwner.from_dict(object_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


