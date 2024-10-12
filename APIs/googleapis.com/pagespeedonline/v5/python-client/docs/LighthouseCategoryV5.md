# LighthouseCategoryV5

A Lighthouse category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_refs** | [**List[AuditRefs]**](AuditRefs.md) | An array of references to all the audit members of this category. | [optional] 
**description** | **str** | A more detailed description of the category and its importance. | [optional] 
**id** | **str** | The string identifier of the category. | [optional] 
**manual_description** | **str** | A description for the manual audits in the category. | [optional] 
**score** | **object** | The overall score of the category, the weighted average of all its audits. (The category&#39;s score, can be null.) | [optional] 
**title** | **str** | The human-friendly name of the category. | [optional] 

## Example

```python
from openapi_client.models.lighthouse_category_v5 import LighthouseCategoryV5

# TODO update the JSON string below
json = "{}"
# create an instance of LighthouseCategoryV5 from a JSON string
lighthouse_category_v5_instance = LighthouseCategoryV5.from_json(json)
# print the JSON string representation of the object
print(LighthouseCategoryV5.to_json())

# convert the object into a dict
lighthouse_category_v5_dict = lighthouse_category_v5_instance.to_dict()
# create an instance of LighthouseCategoryV5 from a dict
lighthouse_category_v5_from_dict = LighthouseCategoryV5.from_dict(lighthouse_category_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


