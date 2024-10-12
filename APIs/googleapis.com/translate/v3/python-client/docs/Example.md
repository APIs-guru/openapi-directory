# Example

A sentence pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. The resource name of the example, in form of &#x60;projects/{project-number-or-id}/locations/{location_id}/datasets/{dataset_id}/examples/{example_id}&#39; | [optional] [readonly] 
**source_text** | **str** | Sentence in source language. | [optional] 
**target_text** | **str** | Sentence in target language. | [optional] 
**usage** | **str** | Output only. Usage of the sentence pair. Options are TRAIN|VALIDATION|TEST. | [optional] [readonly] 

## Example

```python
from openapi_client.models.example import Example

# TODO update the JSON string below
json = "{}"
# create an instance of Example from a JSON string
example_instance = Example.from_json(json)
# print the JSON string representation of the object
print(Example.to_json())

# convert the object into a dict
example_dict = example_instance.to_dict()
# create an instance of Example from a dict
example_from_dict = Example.from_dict(example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


