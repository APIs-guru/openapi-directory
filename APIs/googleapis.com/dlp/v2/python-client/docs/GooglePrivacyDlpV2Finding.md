# GooglePrivacyDlpV2Finding

Represents a piece of potentially sensitive content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when finding was detected. | [optional] 
**finding_id** | **str** | The unique finding id. | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**job_create_time** | **str** | Time the job started that produced this finding. | [optional] 
**job_name** | **str** | The job that stored the finding. | [optional] 
**labels** | **Dict[str, str]** | The labels associated with this &#x60;Finding&#x60;. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: &#x60;[a-z]([-a-z0-9]*[a-z0-9])?&#x60;. Label values must be between 0 and 63 characters long and must conform to the regular expression &#x60;([a-z]([-a-z0-9]*[a-z0-9])?)?&#x60;. No more than 10 labels can be associated with a given finding. Examples: * &#x60;\&quot;environment\&quot; : \&quot;production\&quot;&#x60; * &#x60;\&quot;pipeline\&quot; : \&quot;etl\&quot;&#x60; | [optional] 
**likelihood** | **str** | Confidence of how likely it is that the &#x60;info_type&#x60; is correct. | [optional] 
**location** | [**GooglePrivacyDlpV2Location**](GooglePrivacyDlpV2Location.md) |  | [optional] 
**name** | **str** | Resource name in format projects/{project}/locations/{location}/findings/{finding} Populated only when viewing persisted findings. | [optional] 
**quote** | **str** | The content that was found. Even if the content is not textual, it may be converted to a textual representation here. Provided if &#x60;include_quote&#x60; is true and the finding is less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes in length, the quote may be omitted. | [optional] 
**quote_info** | [**GooglePrivacyDlpV2QuoteInfo**](GooglePrivacyDlpV2QuoteInfo.md) |  | [optional] 
**resource_name** | **str** | The job that stored the finding. | [optional] 
**trigger_name** | **str** | Job trigger name, if applicable, for this finding. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_finding import GooglePrivacyDlpV2Finding

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Finding from a JSON string
google_privacy_dlp_v2_finding_instance = GooglePrivacyDlpV2Finding.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Finding.to_json())

# convert the object into a dict
google_privacy_dlp_v2_finding_dict = google_privacy_dlp_v2_finding_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Finding from a dict
google_privacy_dlp_v2_finding_from_dict = GooglePrivacyDlpV2Finding.from_dict(google_privacy_dlp_v2_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


