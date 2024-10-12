# MethodDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**queue** | **str** |  | [optional] 
**reply_queue** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.method_dto import MethodDto

# TODO update the JSON string below
json = "{}"
# create an instance of MethodDto from a JSON string
method_dto_instance = MethodDto.from_json(json)
# print the JSON string representation of the object
print(MethodDto.to_json())

# convert the object into a dict
method_dto_dict = method_dto_instance.to_dict()
# create an instance of MethodDto from a dict
method_dto_from_dict = MethodDto.from_dict(method_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


