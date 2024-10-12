# Features

All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extract_document_sentiment** | **bool** | Extract document-level sentiment. | [optional] 
**extract_entities** | **bool** | Extract entities. | [optional] 
**extract_syntax** | **bool** | Extract syntax information. | [optional] 

## Example

```python
from openapi_client.models.features import Features

# TODO update the JSON string below
json = "{}"
# create an instance of Features from a JSON string
features_instance = Features.from_json(json)
# print the JSON string representation of the object
print(Features.to_json())

# convert the object into a dict
features_dict = features_instance.to_dict()
# create an instance of Features from a dict
features_from_dict = Features.from_dict(features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


