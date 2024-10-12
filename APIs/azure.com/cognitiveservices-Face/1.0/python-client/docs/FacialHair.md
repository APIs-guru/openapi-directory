# FacialHair

Properties describing facial hair attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beard** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**moustache** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 
**sideburns** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | [optional] 

## Example

```python
from openapi_client.models.facial_hair import FacialHair

# TODO update the JSON string below
json = "{}"
# create an instance of FacialHair from a JSON string
facial_hair_instance = FacialHair.from_json(json)
# print the JSON string representation of the object
print(FacialHair.to_json())

# convert the object into a dict
facial_hair_dict = facial_hair_instance.to_dict()
# create an instance of FacialHair from a dict
facial_hair_from_dict = FacialHair.from_dict(facial_hair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


