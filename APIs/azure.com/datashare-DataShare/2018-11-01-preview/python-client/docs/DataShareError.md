# DataShareError

The data share error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DataShareErrorInfo**](DataShareErrorInfo.md) |  | 

## Example

```python
from openapi_client.models.data_share_error import DataShareError

# TODO update the JSON string below
json = "{}"
# create an instance of DataShareError from a JSON string
data_share_error_instance = DataShareError.from_json(json)
# print the JSON string representation of the object
print(DataShareError.to_json())

# convert the object into a dict
data_share_error_dict = data_share_error_instance.to_dict()
# create an instance of DataShareError from a dict
data_share_error_from_dict = DataShareError.from_dict(data_share_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


