# FieldItemDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.field_item_describe import FieldItemDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of FieldItemDescribe from a JSON string
field_item_describe_instance = FieldItemDescribe.from_json(json)
# print the JSON string representation of the object
print(FieldItemDescribe.to_json())

# convert the object into a dict
field_item_describe_dict = field_item_describe_instance.to_dict()
# create an instance of FieldItemDescribe from a dict
field_item_describe_from_dict = FieldItemDescribe.from_dict(field_item_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


