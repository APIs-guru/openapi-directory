# API2ModelsProfile



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_me** | **str** |  | [optional] 
**background_url** | **str** |  | [optional] 
**counts** | [**API2ModelsCounts**](API2ModelsCounts.md) |  | [optional] 
**first_name** | **str** |  | [optional] 
**full_name** | **str** |  | [optional] 
**home_url** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**photo_url** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 
**user_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_profile import API2ModelsProfile

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsProfile from a JSON string
api2_models_profile_instance = API2ModelsProfile.from_json(json)
# print the JSON string representation of the object
print(API2ModelsProfile.to_json())

# convert the object into a dict
api2_models_profile_dict = api2_models_profile_instance.to_dict()
# create an instance of API2ModelsProfile from a dict
api2_models_profile_from_dict = API2ModelsProfile.from_dict(api2_models_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


