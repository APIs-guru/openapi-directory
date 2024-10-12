# ResultLabelsInner

Refinement label associated with a custom search result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of a refinement label. This is the name you should display in your user interface. | [optional] 
**label_with_op** | **str** | Refinement label and the associated refinement operation. | [optional] 
**name** | **str** | The name of a refinement label, which you can use to refine searches. Don&#39;t display this in your user interface; instead, use displayName. | [optional] 

## Example

```python
from openapi_client.models.result_labels_inner import ResultLabelsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResultLabelsInner from a JSON string
result_labels_inner_instance = ResultLabelsInner.from_json(json)
# print the JSON string representation of the object
print(ResultLabelsInner.to_json())

# convert the object into a dict
result_labels_inner_dict = result_labels_inner_instance.to_dict()
# create an instance of ResultLabelsInner from a dict
result_labels_inner_from_dict = ResultLabelsInner.from_dict(result_labels_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


