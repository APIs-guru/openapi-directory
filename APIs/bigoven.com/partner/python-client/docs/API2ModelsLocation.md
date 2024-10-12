# API2ModelsLocation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**dma** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_location import API2ModelsLocation

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsLocation from a JSON string
api2_models_location_instance = API2ModelsLocation.from_json(json)
# print the JSON string representation of the object
print(API2ModelsLocation.to_json())

# convert the object into a dict
api2_models_location_dict = api2_models_location_instance.to_dict()
# create an instance of API2ModelsLocation from a dict
api2_models_location_from_dict = API2ModelsLocation.from_dict(api2_models_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


