# IEdmSchemaElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] [readonly] 
**namespace** | **str** |  | [optional] [readonly] 
**schema_element_kind** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_schema_element import IEdmSchemaElement

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmSchemaElement from a JSON string
i_edm_schema_element_instance = IEdmSchemaElement.from_json(json)
# print the JSON string representation of the object
print(IEdmSchemaElement.to_json())

# convert the object into a dict
i_edm_schema_element_dict = i_edm_schema_element_instance.to_dict()
# create an instance of IEdmSchemaElement from a dict
i_edm_schema_element_from_dict = IEdmSchemaElement.from_dict(i_edm_schema_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


