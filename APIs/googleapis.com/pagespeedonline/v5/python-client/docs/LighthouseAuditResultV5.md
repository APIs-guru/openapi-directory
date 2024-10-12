# LighthouseAuditResultV5

An audit's result object in a Lighthouse result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the audit. | [optional] 
**details** | **Dict[str, object]** | Freeform details section of the audit. | [optional] 
**display_value** | **str** | The value that should be displayed on the UI for this audit. | [optional] 
**error_message** | **str** | An error message from a thrown error inside the audit. | [optional] 
**explanation** | **str** | An explanation of the errors in the audit. | [optional] 
**id** | **str** | The audit&#39;s id. | [optional] 
**numeric_unit** | **str** | The unit of the numeric_value field. Used to format the numeric value for display. | [optional] 
**numeric_value** | **float** | A numeric value that has a meaning specific to the audit, e.g. the number of nodes in the DOM or the timestamp of a specific load event. More information can be found in the audit details, if present. | [optional] 
**score** | **object** | The score of the audit, can be null. | [optional] 
**score_display_mode** | **str** | The enumerated score display mode. | [optional] 
**title** | **str** | The human readable title. | [optional] 
**warnings** | **object** | Possible warnings that occurred in the audit, can be null. | [optional] 

## Example

```python
from openapi_client.models.lighthouse_audit_result_v5 import LighthouseAuditResultV5

# TODO update the JSON string below
json = "{}"
# create an instance of LighthouseAuditResultV5 from a JSON string
lighthouse_audit_result_v5_instance = LighthouseAuditResultV5.from_json(json)
# print the JSON string representation of the object
print(LighthouseAuditResultV5.to_json())

# convert the object into a dict
lighthouse_audit_result_v5_dict = lighthouse_audit_result_v5_instance.to_dict()
# create an instance of LighthouseAuditResultV5 from a dict
lighthouse_audit_result_v5_from_dict = LighthouseAuditResultV5.from_dict(lighthouse_audit_result_v5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


