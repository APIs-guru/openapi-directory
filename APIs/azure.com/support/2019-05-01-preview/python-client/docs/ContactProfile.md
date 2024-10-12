# ContactProfile

Contact information associated with support ticket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_email_addresses** | **List[str]** | Additional email addresses listed will be copied on any correspondence about the support ticket. | [optional] 
**country** | **str** | Country of the user. This is the ISO 3166-1 alpha-3 code. | 
**first_name** | **str** | First name. | 
**last_name** | **str** | Last name. | 
**phone_number** | **str** | Phone number. This is required if preferred contact method is phone. | [optional] 
**preferred_contact_method** | **str** | Preferred contact method. | 
**preferred_support_language** | **str** | Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at &lt;a  target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://azure.microsoft.com/support/plans/response/&#39;&gt;Azure Severity and responsiveness&lt;/a&gt;. Use the standard language-country code. Valid values are &#39;en-us&#39; for English, &#39;zh-hans&#39; for Chinese, &#39;es-es&#39; for Spanish, &#39;fr-fr&#39; for French, &#39;ja-jp&#39; for Japanese, &#39;ko-kr&#39; for Korean, &#39;ru-ru&#39; for Russian, &#39;pt-br&#39; for Portuguese, &#39;it-it&#39; for Italian, &#39;zh-tw&#39; for Chinese and &#39;de-de&#39; for German. | 
**preferred_time_zone** | **str** | Time zone of the user. This is the name of the time zone from &lt;a  target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values&#39;&gt;Microsoft Time Zone Index Values&lt;/a&gt;. | 
**primary_email_address** | **str** | Primary email address. | 

## Example

```python
from openapi_client.models.contact_profile import ContactProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContactProfile from a JSON string
contact_profile_instance = ContactProfile.from_json(json)
# print the JSON string representation of the object
print(ContactProfile.to_json())

# convert the object into a dict
contact_profile_dict = contact_profile_instance.to_dict()
# create an instance of ContactProfile from a dict
contact_profile_from_dict = ContactProfile.from_dict(contact_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


