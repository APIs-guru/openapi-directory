# TransformSummary

Description of the type, names/ids, and input/outputs for a transform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_data** | [**List[DisplayData]**](DisplayData.md) | Transform-specific display data. | [optional] 
**id** | **str** | SDK generated id of this transform instance. | [optional] 
**input_collection_name** | **List[str]** | User names for all collection inputs to this transform. | [optional] 
**kind** | **str** | Type of transform. | [optional] 
**name** | **str** | User provided name for this transform instance. | [optional] 
**output_collection_name** | **List[str]** | User names for all collection outputs to this transform. | [optional] 

## Example

```python
from openapi_client.models.transform_summary import TransformSummary

# TODO update the JSON string below
json = "{}"
# create an instance of TransformSummary from a JSON string
transform_summary_instance = TransformSummary.from_json(json)
# print the JSON string representation of the object
print(TransformSummary.to_json())

# convert the object into a dict
transform_summary_dict = transform_summary_instance.to_dict()
# create an instance of TransformSummary from a dict
transform_summary_from_dict = TransformSummary.from_dict(transform_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


