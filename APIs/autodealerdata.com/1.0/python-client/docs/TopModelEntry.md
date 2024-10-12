# TopModelEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_market_share** | **float** |  | 
**brand_name** | **str** |  | 
**model_name** | **str** |  | 
**percent_of_brand_sales** | **float** |  | 
**percent_of_top_sales** | **float** |  | 

## Example

```python
from openapi_client.models.top_model_entry import TopModelEntry

# TODO update the JSON string below
json = "{}"
# create an instance of TopModelEntry from a JSON string
top_model_entry_instance = TopModelEntry.from_json(json)
# print the JSON string representation of the object
print(TopModelEntry.to_json())

# convert the object into a dict
top_model_entry_dict = top_model_entry_instance.to_dict()
# create an instance of TopModelEntry from a dict
top_model_entry_from_dict = TopModelEntry.from_dict(top_model_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


