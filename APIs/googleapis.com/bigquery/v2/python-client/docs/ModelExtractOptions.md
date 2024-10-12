# ModelExtractOptions

Options related to model extraction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trial_id** | **str** | The 1-based ID of the trial to be exported from a hyperparameter tuning model. If not specified, the trial with id &#x3D; [Model](/bigquery/docs/reference/rest/v2/models#resource:-model).defaultTrialId is exported. This field is ignored for models not trained with hyperparameter tuning. | [optional] 

## Example

```python
from openapi_client.models.model_extract_options import ModelExtractOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ModelExtractOptions from a JSON string
model_extract_options_instance = ModelExtractOptions.from_json(json)
# print the JSON string representation of the object
print(ModelExtractOptions.to_json())

# convert the object into a dict
model_extract_options_dict = model_extract_options_instance.to_dict()
# create an instance of ModelExtractOptions from a dict
model_extract_options_from_dict = ModelExtractOptions.from_dict(model_extract_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


