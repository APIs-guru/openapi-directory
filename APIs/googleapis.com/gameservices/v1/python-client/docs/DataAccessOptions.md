# DataAccessOptions

Write a Data Access (Gin) log

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_mode** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.data_access_options import DataAccessOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DataAccessOptions from a JSON string
data_access_options_instance = DataAccessOptions.from_json(json)
# print the JSON string representation of the object
print(DataAccessOptions.to_json())

# convert the object into a dict
data_access_options_dict = data_access_options_instance.to_dict()
# create an instance of DataAccessOptions from a dict
data_access_options_from_dict = DataAccessOptions.from_dict(data_access_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


