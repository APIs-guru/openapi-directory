# AttributeDefinition

A client-defined consent attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | Required. Possible values for the attribute. The number of allowed values must not exceed 500. An empty list is invalid. The list can only be expanded after creation. | [optional] 
**category** | **str** | Required. The category of the attribute. The value of this field cannot be changed after creation. | [optional] 
**consent_default_values** | **List[str]** | Optional. Default values of the attribute in Consents. If no default values are specified, it defaults to an empty value. | [optional] 
**data_mapping_default_value** | **str** | Optional. Default value of the attribute in User data mappings. If no default value is specified, it defaults to an empty value. This field is only applicable to attributes of the category &#x60;RESOURCE&#x60;. | [optional] 
**description** | **str** | Optional. A description of the attribute. | [optional] 
**name** | **str** | Identifier. Resource name of the Attribute definition, of the form &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/consentStores/{consent_store_id}/attributeDefinitions/{attribute_definition_id}&#x60;. Cannot be changed after creation. | [optional] 

## Example

```python
from openapi_client.models.attribute_definition import AttributeDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeDefinition from a JSON string
attribute_definition_instance = AttributeDefinition.from_json(json)
# print the JSON string representation of the object
print(AttributeDefinition.to_json())

# convert the object into a dict
attribute_definition_dict = attribute_definition_instance.to_dict()
# create an instance of AttributeDefinition from a dict
attribute_definition_from_dict = AttributeDefinition.from_dict(attribute_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


