# MiddlewareDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**require_session** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.middleware_definition import MiddlewareDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of MiddlewareDefinition from a JSON string
middleware_definition_instance = MiddlewareDefinition.from_json(json)
# print the JSON string representation of the object
print(MiddlewareDefinition.to_json())

# convert the object into a dict
middleware_definition_dict = middleware_definition_instance.to_dict()
# create an instance of MiddlewareDefinition from a dict
middleware_definition_from_dict = MiddlewareDefinition.from_dict(middleware_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


