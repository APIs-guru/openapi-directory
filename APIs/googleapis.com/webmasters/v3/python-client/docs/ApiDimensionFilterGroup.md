# ApiDimensionFilterGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**List[ApiDimensionFilter]**](ApiDimensionFilter.md) |  | [optional] 
**group_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_dimension_filter_group import ApiDimensionFilterGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDimensionFilterGroup from a JSON string
api_dimension_filter_group_instance = ApiDimensionFilterGroup.from_json(json)
# print the JSON string representation of the object
print(ApiDimensionFilterGroup.to_json())

# convert the object into a dict
api_dimension_filter_group_dict = api_dimension_filter_group_instance.to_dict()
# create an instance of ApiDimensionFilterGroup from a dict
api_dimension_filter_group_from_dict = ApiDimensionFilterGroup.from_dict(api_dimension_filter_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


