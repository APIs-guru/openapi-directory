# DefaultDto

Base data transfer object implementation for default resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**location** | **str** | Location of the azure resource. | [optional] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags on the azure resource. | [optional] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.default_dto import DefaultDto

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultDto from a JSON string
default_dto_instance = DefaultDto.from_json(json)
# print the JSON string representation of the object
print(DefaultDto.to_json())

# convert the object into a dict
default_dto_dict = default_dto_instance.to_dict()
# create an instance of DefaultDto from a dict
default_dto_from_dict = DefaultDto.from_dict(default_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


