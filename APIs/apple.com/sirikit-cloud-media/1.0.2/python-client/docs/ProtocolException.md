# ProtocolException


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**method_index** | **int** |  | [optional] 
**method_name** | **str** |  | [optional] 
**reason** | [**ProtocolExceptionReason**](ProtocolExceptionReason.md) |  | 
**retry_with_delay** | **float** |  | [optional] [default to -1]
**trace** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.protocol_exception import ProtocolException

# TODO update the JSON string below
json = "{}"
# create an instance of ProtocolException from a JSON string
protocol_exception_instance = ProtocolException.from_json(json)
# print the JSON string representation of the object
print(ProtocolException.to_json())

# convert the object into a dict
protocol_exception_dict = protocol_exception_instance.to_dict()
# create an instance of ProtocolException from a dict
protocol_exception_from_dict = ProtocolException.from_dict(protocol_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


