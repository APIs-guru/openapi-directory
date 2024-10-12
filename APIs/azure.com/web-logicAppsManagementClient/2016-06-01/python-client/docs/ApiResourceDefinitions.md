# ApiResourceDefinitions

API Definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modified_swagger_url** | **str** | The modified swagger URL | [optional] 
**original_swagger_url** | **str** | The original swagger URL | [optional] 

## Example

```python
from openapi_client.models.api_resource_definitions import ApiResourceDefinitions

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceDefinitions from a JSON string
api_resource_definitions_instance = ApiResourceDefinitions.from_json(json)
# print the JSON string representation of the object
print(ApiResourceDefinitions.to_json())

# convert the object into a dict
api_resource_definitions_dict = api_resource_definitions_instance.to_dict()
# create an instance of ApiResourceDefinitions from a dict
api_resource_definitions_from_dict = ApiResourceDefinitions.from_dict(api_resource_definitions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


