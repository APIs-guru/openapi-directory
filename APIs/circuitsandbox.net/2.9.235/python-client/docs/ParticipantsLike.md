# ParticipantsLike


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** | The first name of the user | [optional] 
**large_image_uri** | **str** | The large image uri of the user | [optional] 
**last_name** | **str** | The last name of the user | [optional] 
**small_image_uri** | **str** | The small image uri of the user | [optional] 
**user_id** | **str** | The id of the user | [optional] 

## Example

```python
from openapi_client.models.participants_like import ParticipantsLike

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantsLike from a JSON string
participants_like_instance = ParticipantsLike.from_json(json)
# print the JSON string representation of the object
print(ParticipantsLike.to_json())

# convert the object into a dict
participants_like_dict = participants_like_instance.to_dict()
# create an instance of ParticipantsLike from a dict
participants_like_from_dict = ParticipantsLike.from_dict(participants_like_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


