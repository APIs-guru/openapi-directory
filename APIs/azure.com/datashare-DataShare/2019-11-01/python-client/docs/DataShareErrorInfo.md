# DataShareErrorInfo

The data share error body model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code of the error | 
**details** | [**List[DataShareErrorInfo]**](DataShareErrorInfo.md) | Nested details of the error model | [optional] 
**message** | **str** | Message of the error | 
**target** | **str** | Target of the error | [optional] 

## Example

```python
from openapi_client.models.data_share_error_info import DataShareErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataShareErrorInfo from a JSON string
data_share_error_info_instance = DataShareErrorInfo.from_json(json)
# print the JSON string representation of the object
print(DataShareErrorInfo.to_json())

# convert the object into a dict
data_share_error_info_dict = data_share_error_info_instance.to_dict()
# create an instance of DataShareErrorInfo from a dict
data_share_error_info_from_dict = DataShareErrorInfo.from_dict(data_share_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


