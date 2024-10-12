# MobileUsabilityInspectionResult

Mobile-usability inspection results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[MobileUsabilityIssue]**](MobileUsabilityIssue.md) | A list of zero or more mobile-usability issues detected for this URL. | [optional] 
**verdict** | **str** | High-level mobile-usability inspection result for this URL. | [optional] 

## Example

```python
from openapi_client.models.mobile_usability_inspection_result import MobileUsabilityInspectionResult

# TODO update the JSON string below
json = "{}"
# create an instance of MobileUsabilityInspectionResult from a JSON string
mobile_usability_inspection_result_instance = MobileUsabilityInspectionResult.from_json(json)
# print the JSON string representation of the object
print(MobileUsabilityInspectionResult.to_json())

# convert the object into a dict
mobile_usability_inspection_result_dict = mobile_usability_inspection_result_instance.to_dict()
# create an instance of MobileUsabilityInspectionResult from a dict
mobile_usability_inspection_result_from_dict = MobileUsabilityInspectionResult.from_dict(mobile_usability_inspection_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


