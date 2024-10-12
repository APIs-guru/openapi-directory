# ApiEntity

API Management

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.api_entity import ApiEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ApiEntity from a JSON string
api_entity_instance = ApiEntity.from_json(json)
# print the JSON string representation of the object
print(ApiEntity.to_json())

# convert the object into a dict
api_entity_dict = api_entity_instance.to_dict()
# create an instance of ApiEntity from a dict
api_entity_from_dict = ApiEntity.from_dict(api_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


