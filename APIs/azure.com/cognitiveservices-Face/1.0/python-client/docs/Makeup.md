# Makeup

Properties describing present makeups on a given face.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eye_makeup** | **bool** | A boolean value describing whether eye makeup is present on a face. | [optional] 
**lip_makeup** | **bool** | A boolean value describing whether lip makeup is present on a face. | [optional] 

## Example

```python
from openapi_client.models.makeup import Makeup

# TODO update the JSON string below
json = "{}"
# create an instance of Makeup from a JSON string
makeup_instance = Makeup.from_json(json)
# print the JSON string representation of the object
print(Makeup.to_json())

# convert the object into a dict
makeup_dict = makeup_instance.to_dict()
# create an instance of Makeup from a dict
makeup_from_dict = Makeup.from_dict(makeup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


