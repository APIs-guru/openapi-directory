# Hair

Properties describing hair attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bald** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**hair_color** | [**List[HairColor]**](HairColor.md) |  | [optional] 
**invisible** | **bool** | A boolean value describing whether the hair is visible in the image. | [optional] 

## Example

```python
from openapi_client.models.hair import Hair

# TODO update the JSON string below
json = "{}"
# create an instance of Hair from a JSON string
hair_instance = Hair.from_json(json)
# print the JSON string representation of the object
print(Hair.to_json())

# convert the object into a dict
hair_dict = hair_instance.to_dict()
# create an instance of Hair from a dict
hair_from_dict = Hair.from_dict(hair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


