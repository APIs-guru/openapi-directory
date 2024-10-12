# ModelYearDistEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** |  | 
**model_name** | **str** |  | 
**percent_of_market** | **float** |  | 
**year** | **int** |  | 

## Example

```python
from openapi_client.models.model_year_dist_entry import ModelYearDistEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ModelYearDistEntry from a JSON string
model_year_dist_entry_instance = ModelYearDistEntry.from_json(json)
# print the JSON string representation of the object
print(ModelYearDistEntry.to_json())

# convert the object into a dict
model_year_dist_entry_dict = model_year_dist_entry_instance.to_dict()
# create an instance of ModelYearDistEntry from a dict
model_year_dist_entry_from_dict = ModelYearDistEntry.from_dict(model_year_dist_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


