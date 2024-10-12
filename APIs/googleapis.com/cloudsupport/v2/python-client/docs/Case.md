# Case

A Case is an object that contains the details of a support case. It contains fields for the time it was created, its priority, its classification, and more. Cases can also have comments and attachments that get added over time. A case is parented by a Google Cloud organization or project. Organizations are identified by a number, so the name of a case parented by an organization would look like this: ``` organizations/123/cases/456 ``` Projects have two unique identifiers, an ID and a number, and they look like this: ``` projects/abc/cases/456 ``` ``` projects/123/cases/456 ``` You can use either of them when calling the API. To learn more about project identifiers, see [AIP-2510](https://google.aip.dev/cloud/2510). Next ID: 38

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classification** | [**CaseClassification**](CaseClassification.md) |  | [optional] 
**contact_email** | **str** | A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user&#39;s email address directly from their EUCs. | [optional] 
**create_time** | **str** | Output only. The time this case was created. | [optional] [readonly] 
**creator** | [**Actor**](Actor.md) |  | [optional] 
**description** | **str** | A broad description of the issue. | [optional] 
**display_name** | **str** | The short summary of the issue reported in this case. | [optional] 
**escalated** | **bool** | Whether the case is currently escalated. | [optional] 
**language_code** | **str** | The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., &#x60;\&quot;en\&quot;&#x60;, &#x60;\&quot;zh-CN\&quot;&#x60;, &#x60;\&quot;zh-TW\&quot;&#x60;, &#x60;\&quot;ja\&quot;&#x60;, &#x60;\&quot;ko\&quot;&#x60;). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours | [optional] 
**name** | **str** | The resource name for the case. | [optional] 
**priority** | **str** | The priority of this case. | [optional] 
**state** | **str** | Output only. The current status of the support case. | [optional] [readonly] 
**subscriber_email_addresses** | **List[str]** | The email addresses to receive updates on this case. | [optional] 
**test_case** | **bool** | Whether this case was created for internal API testing and should not be acted on by the support team. | [optional] 
**time_zone** | **str** | The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API. | [optional] 
**update_time** | **str** | Output only. The time this case was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.case import Case

# TODO update the JSON string below
json = "{}"
# create an instance of Case from a JSON string
case_instance = Case.from_json(json)
# print the JSON string representation of the object
print(Case.to_json())

# convert the object into a dict
case_dict = case_instance.to_dict()
# create an instance of Case from a dict
case_from_dict = Case.from_dict(case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


