# SasDefinitionItem

The SAS definition item containing storage SAS definition metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**SasDefinitionAttributes**](SasDefinitionAttributes.md) |  | [optional] 
**id** | **str** | The storage SAS identifier. | [optional] [readonly] 
**sid** | **str** | The storage account SAS definition secret id. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_definition_item import SasDefinitionItem

# TODO update the JSON string below
json = "{}"
# create an instance of SasDefinitionItem from a JSON string
sas_definition_item_instance = SasDefinitionItem.from_json(json)
# print the JSON string representation of the object
print(SasDefinitionItem.to_json())

# convert the object into a dict
sas_definition_item_dict = sas_definition_item_instance.to_dict()
# create an instance of SasDefinitionItem from a dict
sas_definition_item_from_dict = SasDefinitionItem.from_dict(sas_definition_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


