# OperationWarningsInnerDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled for IP forwarding). | [optional] 
**value** | **str** | [Output Only] A warning data value corresponding to the key. | [optional] 

## Example

```python
from openapi_client.models.operation_warnings_inner_data_inner import OperationWarningsInnerDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of OperationWarningsInnerDataInner from a JSON string
operation_warnings_inner_data_inner_instance = OperationWarningsInnerDataInner.from_json(json)
# print the JSON string representation of the object
print(OperationWarningsInnerDataInner.to_json())

# convert the object into a dict
operation_warnings_inner_data_inner_dict = operation_warnings_inner_data_inner_instance.to_dict()
# create an instance of OperationWarningsInnerDataInner from a dict
operation_warnings_inner_data_inner_from_dict = OperationWarningsInnerDataInner.from_dict(operation_warnings_inner_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


