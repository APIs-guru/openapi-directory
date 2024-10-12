# EvaluateAnnotationStoreRequest

Request to evaluate an Annotation store against a ground truth [Annotation store].

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination**](GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.md) |  | [optional] 
**eval_info_type_mapping** | **Dict[str, str]** | Optional. InfoType mapping for &#x60;eval_store&#x60;. Different resources can map to the same infoType. For example, &#x60;PERSON_NAME&#x60;, &#x60;PERSON&#x60;, &#x60;NAME&#x60;, and &#x60;HUMAN&#x60; are different. To map all of these into a single infoType (such as &#x60;PERSON_NAME&#x60;), specify the following mapping: &#x60;&#x60;&#x60; info_type_mapping[\&quot;PERSON\&quot;] &#x3D; \&quot;PERSON_NAME\&quot; info_type_mapping[\&quot;NAME\&quot;] &#x3D; \&quot;PERSON_NAME\&quot; info_type_mapping[\&quot;HUMAN\&quot;] &#x3D; \&quot;PERSON_NAME\&quot; &#x60;&#x60;&#x60; Unmentioned infoTypes, such as &#x60;DATE&#x60;, are treated as identity mapping. For example: &#x60;&#x60;&#x60; info_type_mapping[\&quot;DATE\&quot;] &#x3D; \&quot;DATE\&quot; &#x60;&#x60;&#x60; InfoTypes are case-insensitive. | [optional] 
**golden_info_type_mapping** | **Dict[str, str]** | Optional. Similar to &#x60;eval_info_type_mapping&#x60;, infoType mapping for &#x60;golden_store&#x60;. | [optional] 
**golden_store** | **str** | Required. The Annotation store to use as ground truth, in the format of &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/annotationStores/{annotation_store_id}&#x60;. | [optional] 
**info_type_config** | [**InfoTypeConfig**](InfoTypeConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.evaluate_annotation_store_request import EvaluateAnnotationStoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EvaluateAnnotationStoreRequest from a JSON string
evaluate_annotation_store_request_instance = EvaluateAnnotationStoreRequest.from_json(json)
# print the JSON string representation of the object
print(EvaluateAnnotationStoreRequest.to_json())

# convert the object into a dict
evaluate_annotation_store_request_dict = evaluate_annotation_store_request_instance.to_dict()
# create an instance of EvaluateAnnotationStoreRequest from a dict
evaluate_annotation_store_request_from_dict = EvaluateAnnotationStoreRequest.from_dict(evaluate_annotation_store_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


