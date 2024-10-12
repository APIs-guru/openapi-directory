# BasicModelStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** |  | 
**median** | **float** |  | 
**name** | **str** |  | 
**p_variance** | **float** |  | 
**std_dev** | **float** |  | 

## Example

```python
from openapi_client.models.basic_model_stats import BasicModelStats

# TODO update the JSON string below
json = "{}"
# create an instance of BasicModelStats from a JSON string
basic_model_stats_instance = BasicModelStats.from_json(json)
# print the JSON string representation of the object
print(BasicModelStats.to_json())

# convert the object into a dict
basic_model_stats_dict = basic_model_stats_instance.to_dict()
# create an instance of BasicModelStats from a dict
basic_model_stats_from_dict = BasicModelStats.from_dict(basic_model_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


