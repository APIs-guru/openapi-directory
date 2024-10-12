# AttributeParameters

Configurable parameters for attribute scoring.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_threshold** | **float** | Don&#39;t return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset. | [optional] 
**score_type** | **str** | What type of scores to return. If unset, defaults to probability scores. | [optional] 

## Example

```python
from openapi_client.models.attribute_parameters import AttributeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeParameters from a JSON string
attribute_parameters_instance = AttributeParameters.from_json(json)
# print the JSON string representation of the object
print(AttributeParameters.to_json())

# convert the object into a dict
attribute_parameters_dict = attribute_parameters_instance.to_dict()
# create an instance of AttributeParameters from a dict
attribute_parameters_from_dict = AttributeParameters.from_dict(attribute_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


