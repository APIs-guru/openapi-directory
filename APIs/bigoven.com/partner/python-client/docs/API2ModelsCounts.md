# API2ModelsCounts



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_count** | **int** |  | [optional] 
**followers_count** | **int** |  | [optional] 
**following_count** | **int** |  | [optional] 
**private_recipe_count** | **int** |  | [optional] 
**public_recipe_count** | **int** |  | [optional] 
**total_recipes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api2_models_counts import API2ModelsCounts

# TODO update the JSON string below
json = "{}"
# create an instance of API2ModelsCounts from a JSON string
api2_models_counts_instance = API2ModelsCounts.from_json(json)
# print the JSON string representation of the object
print(API2ModelsCounts.to_json())

# convert the object into a dict
api2_models_counts_dict = api2_models_counts_instance.to_dict()
# create an instance of API2ModelsCounts from a dict
api2_models_counts_from_dict = API2ModelsCounts.from_dict(api2_models_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


