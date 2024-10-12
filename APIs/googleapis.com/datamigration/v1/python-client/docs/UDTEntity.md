# UDTEntity

UDT's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**udt_body** | **str** | The SQL code which creates the udt body. | [optional] 
**udt_sql_code** | **str** | The SQL code which creates the udt. | [optional] 

## Example

```python
from openapi_client.models.udt_entity import UDTEntity

# TODO update the JSON string below
json = "{}"
# create an instance of UDTEntity from a JSON string
udt_entity_instance = UDTEntity.from_json(json)
# print the JSON string representation of the object
print(UDTEntity.to_json())

# convert the object into a dict
udt_entity_dict = udt_entity_instance.to_dict()
# create an instance of UDTEntity from a dict
udt_entity_from_dict = UDTEntity.from_dict(udt_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


