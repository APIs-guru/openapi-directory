# LargePersonGroup

Large person group object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**large_person_group_id** | **str** | LargePersonGroupId of the target large person groups | 
**recognition_model** | [**RecognitionModel**](RecognitionModel.md) |  | [optional] [default to RecognitionModel.ENUM_01]
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.large_person_group import LargePersonGroup

# TODO update the JSON string below
json = "{}"
# create an instance of LargePersonGroup from a JSON string
large_person_group_instance = LargePersonGroup.from_json(json)
# print the JSON string representation of the object
print(LargePersonGroup.to_json())

# convert the object into a dict
large_person_group_dict = large_person_group_instance.to_dict()
# create an instance of LargePersonGroup from a dict
large_person_group_from_dict = LargePersonGroup.from_dict(large_person_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


