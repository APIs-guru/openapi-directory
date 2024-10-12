# DataType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | [**List[DataTypeField]**](DataTypeField.md) | A field represents one dimension of a data type. | [optional] 
**name** | **str** | Each data type has a unique, namespaced, name. All data types in the com.google namespace are shared as part of the platform. | [optional] 

## Example

```python
from openapi_client.models.data_type import DataType

# TODO update the JSON string below
json = "{}"
# create an instance of DataType from a JSON string
data_type_instance = DataType.from_json(json)
# print the JSON string representation of the object
print(DataType.to_json())

# convert the object into a dict
data_type_dict = data_type_instance.to_dict()
# create an instance of DataType from a dict
data_type_from_dict = DataType.from_dict(data_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


