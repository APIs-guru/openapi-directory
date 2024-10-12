# PinsListSuccessSchemaInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PinsListSuccessSchemaInnerAnyOfItemsInner]**](PinsListSuccessSchemaInnerAnyOfItemsInner.md) |  | 
**ok** | **bool** |  | 
**count** | **int** |  | 

## Example

```python
from openapi_client.models.pins_list_success_schema_inner import PinsListSuccessSchemaInner

# TODO update the JSON string below
json = "{}"
# create an instance of PinsListSuccessSchemaInner from a JSON string
pins_list_success_schema_inner_instance = PinsListSuccessSchemaInner.from_json(json)
# print the JSON string representation of the object
print(PinsListSuccessSchemaInner.to_json())

# convert the object into a dict
pins_list_success_schema_inner_dict = pins_list_success_schema_inner_instance.to_dict()
# create an instance of PinsListSuccessSchemaInner from a dict
pins_list_success_schema_inner_from_dict = PinsListSuccessSchemaInner.from_dict(pins_list_success_schema_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


