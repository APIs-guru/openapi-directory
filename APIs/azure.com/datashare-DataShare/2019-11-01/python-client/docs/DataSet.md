# DataSet

A DataSet data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of data set. | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_set import DataSet

# TODO update the JSON string below
json = "{}"
# create an instance of DataSet from a JSON string
data_set_instance = DataSet.from_json(json)
# print the JSON string representation of the object
print(DataSet.to_json())

# convert the object into a dict
data_set_dict = data_set_instance.to_dict()
# create an instance of DataSet from a dict
data_set_from_dict = DataSet.from_dict(data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


