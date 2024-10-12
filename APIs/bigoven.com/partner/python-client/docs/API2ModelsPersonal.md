# API2ModelsPersonal

Personal level info -- email, location, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**location** | [**API2ModelsLocation**](API2ModelsLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_personal import API2ModelsPersonal

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsPersonal from a JSON string
api2_models_personal_instance = API2ModelsPersonal.from_json(json)
# print the JSON string representation of the object
print(API2ModelsPersonal.to_json())

# convert the object into a dict
api2_models_personal_dict = api2_models_personal_instance.to_dict()
# create an instance of API2ModelsPersonal from a dict
api2_models_personal_from_dict = API2ModelsPersonal.from_dict(api2_models_personal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


