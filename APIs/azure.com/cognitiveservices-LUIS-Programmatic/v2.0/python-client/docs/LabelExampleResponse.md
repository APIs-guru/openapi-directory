# LabelExampleResponse

Response when adding a labeled example.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_id** | **int** | The newly created sample ID. | [optional] 
**utterance_text** | **str** | The sample&#39;s utterance. | [optional] 

## Example

```python
from openapi_client.models.label_example_response import LabelExampleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LabelExampleResponse from a JSON string
label_example_response_instance = LabelExampleResponse.from_json(json)
# print the JSON string representation of the object
print(LabelExampleResponse.to_json())

# convert the object into a dict
label_example_response_dict = label_example_response_instance.to_dict()
# create an instance of LabelExampleResponse from a dict
label_example_response_from_dict = LabelExampleResponse.from_dict(label_example_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


