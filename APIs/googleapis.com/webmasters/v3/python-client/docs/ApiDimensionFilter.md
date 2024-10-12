# ApiDimensionFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** |  | [optional] 
**expression** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_dimension_filter import ApiDimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDimensionFilter from a JSON string
api_dimension_filter_instance = ApiDimensionFilter.from_json(json)
# print the JSON string representation of the object
print(ApiDimensionFilter.to_json())

# convert the object into a dict
api_dimension_filter_dict = api_dimension_filter_instance.to_dict()
# create an instance of ApiDimensionFilter from a dict
api_dimension_filter_from_dict = ApiDimensionFilter.from_dict(api_dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


