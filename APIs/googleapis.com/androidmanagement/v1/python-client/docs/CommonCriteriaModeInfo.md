# CommonCriteriaModeInfo

Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_criteria_mode_status** | **str** | Whether Common Criteria Mode is enabled. | [optional] 

## Example

```python
from openapi_client.models.common_criteria_mode_info import CommonCriteriaModeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CommonCriteriaModeInfo from a JSON string
common_criteria_mode_info_instance = CommonCriteriaModeInfo.from_json(json)
# print the JSON string representation of the object
print(CommonCriteriaModeInfo.to_json())

# convert the object into a dict
common_criteria_mode_info_dict = common_criteria_mode_info_instance.to_dict()
# create an instance of CommonCriteriaModeInfo from a dict
common_criteria_mode_info_from_dict = CommonCriteriaModeInfo.from_dict(common_criteria_mode_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


