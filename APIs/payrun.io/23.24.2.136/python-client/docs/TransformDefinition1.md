# TransformDefinition1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | The transform definitions&#39; active | [optional] 
**content_type** | **str** | The transform definitions&#39; content type | [optional] 
**definition** | **str** | The transform definitions&#39; definition | [optional] 
**definition_type** | **str** | The transform definitions&#39; definition type | [optional] 
**readonly** | **bool** | The transform definitions&#39; readonly | [optional] 
**supported_reports** | **str** | The transform definitions&#39; supported reports | [optional] 
**tax_year** | **int** | The transform definitions&#39; tax year | [optional] 
**title** | **str** | The transform definitions&#39; title | [optional] 
**version** | **str** | The transform definitions&#39; version | [optional] 

## Example

```python
from openapi_client.models.transform_definition1 import TransformDefinition1

# TODO update the JSON string below
json = "{}"
# create an instance of TransformDefinition1 from a JSON string
transform_definition1_instance = TransformDefinition1.from_json(json)
# print the JSON string representation of the object
print(TransformDefinition1.to_json())

# convert the object into a dict
transform_definition1_dict = transform_definition1_instance.to_dict()
# create an instance of TransformDefinition1 from a dict
transform_definition1_from_dict = TransformDefinition1.from_dict(transform_definition1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


