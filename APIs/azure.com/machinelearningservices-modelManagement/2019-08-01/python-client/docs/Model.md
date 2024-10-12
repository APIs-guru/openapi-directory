# Model

An Azure Machine Learning Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | The Model creation time (UTC). | [optional] [readonly] 
**datasets** | [**List[DatasetReference]**](DatasetReference.md) | The list of datasets associated with the model. | [optional] 
**description** | **str** | The Model description text. | [optional] 
**experiment_name** | **str** | The name of the experiment where this model was created. | [optional] 
**framework** | **str** | The Model framework. | [optional] 
**framework_version** | **str** | The Model framework version. | [optional] 
**id** | **str** | The Model Id. | [optional] 
**kv_tags** | **Dict[str, str]** | The Model tag dictionary. Items are mutable. | [optional] 
**mime_type** | **str** | The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml | 
**modified_time** | **datetime** | The Model last modified time (UTC). | [optional] [readonly] 
**name** | **str** | The Model name. | 
**parent_model_id** | **str** | The Parent Model Id. | [optional] 
**properties** | **Dict[str, str]** | The Model property dictionary. Properties are immutable. | [optional] 
**run_id** | **str** | The RunId that created this model. | [optional] 
**unpack** | **bool** | Indicates whether we need to unpack the Model during docker Image creation. | [optional] 
**url** | **str** | The URL of the Model. Usually a SAS URL. | 
**version** | **int** | The Model version assigned by Model Management Service. | [optional] 

## Example

```python
from openapi_client.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print(Model.to_json())

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_from_dict = Model.from_dict(model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


