# DataSetMapping

A data set mapping data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of data set mapping. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_set_mapping import DataSetMapping

# TODO update the JSON string below
json = "{}"
# create an instance of DataSetMapping from a JSON string
data_set_mapping_instance = DataSetMapping.from_json(json)
# print the JSON string representation of the object
print(DataSetMapping.to_json())

# convert the object into a dict
data_set_mapping_dict = data_set_mapping_instance.to_dict()
# create an instance of DataSetMapping from a dict
data_set_mapping_from_dict = DataSetMapping.from_dict(data_set_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


