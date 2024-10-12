# GooglePrivacyDlpV2HybridFindingDetails

Populate to associate additional data with each finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_details** | [**GooglePrivacyDlpV2Container**](GooglePrivacyDlpV2Container.md) |  | [optional] 
**file_offset** | **str** | Offset in bytes of the line, from the beginning of the file, where the finding is located. Populate if the item being scanned is only part of a bigger item, such as a shard of a file and you want to track the absolute position of the finding. | [optional] 
**labels** | **Dict[str, str]** | Labels to represent user provided metadata about the data being inspected. If configured by the job, some key values may be required. The labels associated with &#x60;Finding&#x60;&#39;s produced by hybrid inspection. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60;. Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. No more than 10 labels can be associated with a given finding. Examples: * &#x60;\&quot;environment\&quot; : \&quot;production\&quot;&#x60; * &#x60;\&quot;pipeline\&quot; : \&quot;etl\&quot;&#x60; | [optional] 
**row_offset** | **str** | Offset of the row for tables. Populate if the row(s) being scanned are part of a bigger dataset and you want to keep track of their absolute position. | [optional] 
**table_options** | [**GooglePrivacyDlpV2TableOptions**](GooglePrivacyDlpV2TableOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hybrid_finding_details import GooglePrivacyDlpV2HybridFindingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HybridFindingDetails from a JSON string
google_privacy_dlp_v2_hybrid_finding_details_instance = GooglePrivacyDlpV2HybridFindingDetails.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HybridFindingDetails.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hybrid_finding_details_dict = google_privacy_dlp_v2_hybrid_finding_details_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HybridFindingDetails from a dict
google_privacy_dlp_v2_hybrid_finding_details_from_dict = GooglePrivacyDlpV2HybridFindingDetails.from_dict(google_privacy_dlp_v2_hybrid_finding_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


