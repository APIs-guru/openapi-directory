# CodeSample


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_sample** | **str** | The code snippet | [optional] 
**doc_id** | **str** | The WeGA document identifier representing a specific document | [optional] 
**uri** | **str** | Unique identifier representing a specific document | [optional] 

## Example

```python
from openapi_client.models.code_sample import CodeSample

# TODO update the JSON string below
json = "{}"
# create an instance of CodeSample from a JSON string
code_sample_instance = CodeSample.from_json(json)
# print the JSON string representation of the object
print(CodeSample.to_json())

# convert the object into a dict
code_sample_dict = code_sample_instance.to_dict()
# create an instance of CodeSample from a dict
code_sample_from_dict = CodeSample.from_dict(code_sample_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


