# APIClassifierOut

The list of classifiers and versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classifier_name** | **str** | The classifier name | [optional] 
**learning** | **bool** | True if the classifier is learning | [optional] 
**probability_calibrated** | **bool** | True if the classifier has finished the initial learning and calibrated probabilities (meanwhile, during initial learning, probabilities will be equal to -1) | [optional] 
**serving** | **bool** | True if the classifier is serving requests (has reached minimal learning, is not shutting down) | [optional] 
**shutting_down** | **bool** | True if the classifier is shutting down | [optional] 

## Example

```python
from openapi_client.models.api_classifier_out import APIClassifierOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIClassifierOut from a JSON string
api_classifier_out_instance = APIClassifierOut.from_json(json)
# print the JSON string representation of the object
print(APIClassifierOut.to_json())

# convert the object into a dict
api_classifier_out_dict = api_classifier_out_instance.to_dict()
# create an instance of APIClassifierOut from a dict
api_classifier_out_from_dict = APIClassifierOut.from_dict(api_classifier_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


