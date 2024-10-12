# HairColor

Hair color and associated confidence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Name of the hair color. | [optional] 
**confidence** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 

## Example

```python
from openapi_client.models.hair_color import HairColor

# TODO update the JSON string below
json = "{}"
# create an instance of HairColor from a JSON string
hair_color_instance = HairColor.from_json(json)
# print the JSON string representation of the object
print(HairColor.to_json())

# convert the object into a dict
hair_color_dict = hair_color_instance.to_dict()
# create an instance of HairColor from a dict
hair_color_from_dict = HairColor.from_dict(hair_color_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


