# Evaluate

Evaluate response object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult_classification_score** | **float** | The adult classification score. | [optional] 
**advanced_info** | [**List[KeyValuePair]**](KeyValuePair.md) | The advanced info. | [optional] 
**cache_id** | **str** | The cache id. | [optional] 
**is_image_adult_classified** | **bool** | Indicates if an image is classified as adult. | [optional] 
**is_image_racy_classified** | **bool** | Indicates if the image is classified as racy. | [optional] 
**racy_classification_score** | **float** | The racy classification score. | [optional] 
**result** | **bool** | Evaluate result. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tracking_id** | **str** | The tracking id. | [optional] 

## Example

```python
from openapi_client.models.evaluate import Evaluate

# TODO update the JSON string below
json = "{}"
# create an instance of Evaluate from a JSON string
evaluate_instance = Evaluate.from_json(json)
# print the JSON string representation of the object
print(Evaluate.to_json())

# convert the object into a dict
evaluate_dict = evaluate_instance.to_dict()
# create an instance of Evaluate from a dict
evaluate_from_dict = Evaluate.from_dict(evaluate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


