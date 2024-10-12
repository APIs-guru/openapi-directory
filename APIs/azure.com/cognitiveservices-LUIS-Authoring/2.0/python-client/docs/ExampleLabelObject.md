# ExampleLabelObject

A labeled example utterance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_labels** | [**List[EntityLabelObject]**](EntityLabelObject.md) | The identified entities within the example utterance. | [optional] 
**intent_name** | **str** | The identified intent representing the example utterance. | [optional] 
**text** | **str** | The example utterance. | [optional] 

## Example

```python
from openapi_client.models.example_label_object import ExampleLabelObject

# TODO update the JSON string below
json = "{}"
# create an instance of ExampleLabelObject from a JSON string
example_label_object_instance = ExampleLabelObject.from_json(json)
# print the JSON string representation of the object
print(ExampleLabelObject.to_json())

# convert the object into a dict
example_label_object_dict = example_label_object_instance.to_dict()
# create an instance of ExampleLabelObject from a dict
example_label_object_from_dict = ExampleLabelObject.from_dict(example_label_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


