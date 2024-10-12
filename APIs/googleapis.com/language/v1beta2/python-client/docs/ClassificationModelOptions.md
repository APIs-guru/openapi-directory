# ClassificationModelOptions

Model options available for classification requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**v1_model** | **object** | Options for the V1 model. | [optional] 
**v2_model** | [**ClassificationModelOptionsV2Model**](ClassificationModelOptionsV2Model.md) |  | [optional] 

## Example

```python
from openapi_client.models.classification_model_options import ClassificationModelOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationModelOptions from a JSON string
classification_model_options_instance = ClassificationModelOptions.from_json(json)
# print the JSON string representation of the object
print(ClassificationModelOptions.to_json())

# convert the object into a dict
classification_model_options_dict = classification_model_options_instance.to_dict()
# create an instance of ClassificationModelOptions from a dict
classification_model_options_from_dict = ClassificationModelOptions.from_dict(classification_model_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


