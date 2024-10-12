# PersonFollow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**PersonFollowEmbedded**](PersonFollowEmbedded.md) |  | [optional] 
**person_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.person_follow import PersonFollow

# TODO update the JSON string below
json = "{}"
# create an instance of PersonFollow from a JSON string
person_follow_instance = PersonFollow.from_json(json)
# print the JSON string representation of the object
print(PersonFollow.to_json())

# convert the object into a dict
person_follow_dict = person_follow_instance.to_dict()
# create an instance of PersonFollow from a dict
person_follow_from_dict = PersonFollow.from_dict(person_follow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


