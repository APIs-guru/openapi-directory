# BatchAI

A Machine Learning compute based on Azure BatchAI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BatchAIAllOfProperties**](BatchAIAllOfProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_ai import BatchAI

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAI from a JSON string
batch_ai_instance = BatchAI.from_json(json)
# print the JSON string representation of the object
print(BatchAI.to_json())

# convert the object into a dict
batch_ai_dict = batch_ai_instance.to_dict()
# create an instance of BatchAI from a dict
batch_ai_from_dict = BatchAI.from_dict(batch_ai_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


