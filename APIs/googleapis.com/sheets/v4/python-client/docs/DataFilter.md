# DataFilter

Filter that describes what data should be selected or returned from a request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**a1_range** | **str** | Selects data that matches the specified A1 range. | [optional] 
**developer_metadata_lookup** | [**DeveloperMetadataLookup**](DeveloperMetadataLookup.md) |  | [optional] 
**grid_range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_filter import DataFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DataFilter from a JSON string
data_filter_instance = DataFilter.from_json(json)
# print the JSON string representation of the object
print(DataFilter.to_json())

# convert the object into a dict
data_filter_dict = data_filter_instance.to_dict()
# create an instance of DataFilter from a dict
data_filter_from_dict = DataFilter.from_dict(data_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


