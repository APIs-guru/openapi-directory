# ApiOperation

The api operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiOperationPropertiesDefinition**](ApiOperationPropertiesDefinition.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_operation import ApiOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperation from a JSON string
api_operation_instance = ApiOperation.from_json(json)
# print the JSON string representation of the object
print(ApiOperation.to_json())

# convert the object into a dict
api_operation_dict = api_operation_instance.to_dict()
# create an instance of ApiOperation from a dict
api_operation_from_dict = ApiOperation.from_dict(api_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


