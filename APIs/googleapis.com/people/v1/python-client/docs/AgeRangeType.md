# AgeRangeType

A person's age range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_range** | **str** | The age range. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.age_range_type import AgeRangeType

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRangeType from a JSON string
age_range_type_instance = AgeRangeType.from_json(json)
# print the JSON string representation of the object
print(AgeRangeType.to_json())

# convert the object into a dict
age_range_type_dict = age_range_type_instance.to_dict()
# create an instance of AgeRangeType from a dict
age_range_type_from_dict = AgeRangeType.from_dict(age_range_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


