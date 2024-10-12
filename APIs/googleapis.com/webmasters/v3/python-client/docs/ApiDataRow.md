# ApiDataRow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicks** | **float** |  | [optional] 
**ctr** | **float** |  | [optional] 
**impressions** | **float** |  | [optional] 
**keys** | **List[str]** |  | [optional] 
**position** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_data_row import ApiDataRow

# TODO update the JSON string below
json = "{}"
# create an instance of ApiDataRow from a JSON string
api_data_row_instance = ApiDataRow.from_json(json)
# print the JSON string representation of the object
print(ApiDataRow.to_json())

# convert the object into a dict
api_data_row_dict = api_data_row_instance.to_dict()
# create an instance of ApiDataRow from a dict
api_data_row_from_dict = ApiDataRow.from_dict(api_data_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


