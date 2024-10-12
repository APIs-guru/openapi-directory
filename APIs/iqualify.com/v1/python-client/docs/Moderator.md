# Moderator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_url** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.moderator import Moderator

# TODO update the JSON string below
json = "{}"
# create an instance of Moderator from a JSON string
moderator_instance = Moderator.from_json(json)
# print the JSON string representation of the object
print(Moderator.to_json())

# convert the object into a dict
moderator_dict = moderator_instance.to_dict()
# create an instance of Moderator from a dict
moderator_from_dict = Moderator.from_dict(moderator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


