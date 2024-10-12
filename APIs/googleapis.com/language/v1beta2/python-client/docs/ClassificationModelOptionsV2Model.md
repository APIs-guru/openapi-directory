# ClassificationModelOptionsV2Model

Options for the V2 model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_categories_version** | **str** | The content categories used for classification. | [optional] 

## Example

```python
from openapi_client.models.classification_model_options_v2_model import ClassificationModelOptionsV2Model

# TODO update the JSON string below
json = "{}"
# create an instance of ClassificationModelOptionsV2Model from a JSON string
classification_model_options_v2_model_instance = ClassificationModelOptionsV2Model.from_json(json)
# print the JSON string representation of the object
print(ClassificationModelOptionsV2Model.to_json())

# convert the object into a dict
classification_model_options_v2_model_dict = classification_model_options_v2_model_instance.to_dict()
# create an instance of ClassificationModelOptionsV2Model from a dict
classification_model_options_v2_model_from_dict = ClassificationModelOptionsV2Model.from_dict(classification_model_options_v2_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


