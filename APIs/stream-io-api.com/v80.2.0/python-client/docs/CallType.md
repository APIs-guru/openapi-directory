# CallType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_pk** | **int** |  | 
**created_at** | **datetime** |  | 
**name** | **str** |  | 
**pk** | **int** |  | 
**settings** | [**CallSettings**](CallSettings.md) |  | [optional] 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.call_type import CallType

# TODO update the JSON string below
json = "{}"
# create an instance of CallType from a JSON string
call_type_instance = CallType.from_json(json)
# print the JSON string representation of the object
print(CallType.to_json())

# convert the object into a dict
call_type_dict = call_type_instance.to_dict()
# create an instance of CallType from a dict
call_type_from_dict = CallType.from_dict(call_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


