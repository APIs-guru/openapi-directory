# ApiConnectionDefinition

API connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** | Resource ETag | [optional] 
**id** | **str** | Resource id | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_connection_definition import ApiConnectionDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConnectionDefinition from a JSON string
api_connection_definition_instance = ApiConnectionDefinition.from_json(json)
# print the JSON string representation of the object
print(ApiConnectionDefinition.to_json())

# convert the object into a dict
api_connection_definition_dict = api_connection_definition_instance.to_dict()
# create an instance of ApiConnectionDefinition from a dict
api_connection_definition_from_dict = ApiConnectionDefinition.from_dict(api_connection_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


