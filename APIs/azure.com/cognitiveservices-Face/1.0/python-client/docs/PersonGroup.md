# PersonGroup

Person group object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person_group_id** | **str** | PersonGroupId of the target person group. | 
**recognition_model** | [**RecognitionModel**](RecognitionModel.md) |  | [optional] [default to RecognitionModel.ENUM_01]
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.person_group import PersonGroup

# TODO update the JSON string below
json = "{}"
# create an instance of PersonGroup from a JSON string
person_group_instance = PersonGroup.from_json(json)
# print the JSON string representation of the object
print(PersonGroup.to_json())

# convert the object into a dict
person_group_dict = person_group_instance.to_dict()
# create an instance of PersonGroup from a dict
person_group_from_dict = PersonGroup.from_dict(person_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


