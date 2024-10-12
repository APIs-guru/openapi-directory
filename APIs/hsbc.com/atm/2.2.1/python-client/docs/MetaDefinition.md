# MetaDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreement** | **str** |  | 
**last_updated** | **datetime** |  | 
**license** | **str** | Open Banking License | 
**terms_of_use** | **str** | Open Banking Terms of Use | 
**total_results** | **int** |  | 

## Example

```python
from openapi_client.models.meta_definition import MetaDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of MetaDefinition from a JSON string
meta_definition_instance = MetaDefinition.from_json(json)
# print the JSON string representation of the object
print(MetaDefinition.to_json())

# convert the object into a dict
meta_definition_dict = meta_definition_instance.to_dict()
# create an instance of MetaDefinition from a dict
meta_definition_from_dict = MetaDefinition.from_dict(meta_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


