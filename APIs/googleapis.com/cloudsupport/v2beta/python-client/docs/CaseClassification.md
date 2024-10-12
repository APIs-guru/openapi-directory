# CaseClassification

A Case Classification represents the topic that a case is about. It's very important to use accurate classifications, because they're used to route your cases to specialists who can help you. A classification always has an ID that is its unique identifier. A valid ID is required when creating a case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | A display name for the classification. The display name is not static and can change. To uniquely and consistently identify classifications, use the &#x60;CaseClassification.id&#x60; field. | [optional] 
**id** | **str** | The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use &#x60;caseClassifications.search&#x60;. Classification IDs returned by &#x60;caseClassifications.search&#x60; are guaranteed to be valid for at least 6 months. If a given classification is deactiveated, it will immediately stop being returned. After 6 months, &#x60;case.create&#x60; requests using the classification ID will fail. | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 

## Example

```python
from openapi_client.models.case_classification import CaseClassification

# TODO update the JSON string below
json = "{}"
# create an instance of CaseClassification from a JSON string
case_classification_instance = CaseClassification.from_json(json)
# print the JSON string representation of the object
print(CaseClassification.to_json())

# convert the object into a dict
case_classification_dict = case_classification_instance.to_dict()
# create an instance of CaseClassification from a dict
case_classification_from_dict = CaseClassification.from_dict(case_classification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


