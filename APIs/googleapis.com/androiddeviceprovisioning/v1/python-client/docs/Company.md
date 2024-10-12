# Company

A reseller, vendor, or customer in the zero-touch reseller and customer APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_emails** | **List[str]** | Optional. Email address of customer&#39;s users in the admin role. Each email address must be associated with a Google Account. | [optional] 
**company_id** | **str** | Output only. The ID of the company. Assigned by the server. | [optional] [readonly] 
**company_name** | **str** | Required. The name of the company. For example _XYZ Corp_. Displayed to the company&#39;s employees in the zero-touch enrollment portal. | [optional] 
**google_workspace_account** | [**GoogleWorkspaceAccount**](GoogleWorkspaceAccount.md) |  | [optional] 
**language_code** | **str** | Input only. The preferred locale of the customer represented as a BCP47 language code. This field is validated on input and requests containing unsupported language codes will be rejected. Supported language codes: Arabic (ar) Chinese (Hong Kong) (zh-HK) Chinese (Simplified) (zh-CN) Chinese (Traditional) (zh-TW) Czech (cs) Danish (da) Dutch (nl) English (UK) (en-GB) English (US) (en-US) Filipino (fil) Finnish (fi) French (fr) German (de) Hebrew (iw) Hindi (hi) Hungarian (hu) Indonesian (id) Italian (it) Japanese (ja) Korean (ko) Norwegian (Bokmal) (no) Polish (pl) Portuguese (Brazil) (pt-BR) Portuguese (Portugal) (pt-PT) Russian (ru) Spanish (es) Spanish (Latin America) (es-419) Swedish (sv) Thai (th) Turkish (tr) Ukrainian (uk) Vietnamese (vi) | [optional] 
**name** | **str** | Output only. The API resource name of the company. The resource name is one of the following formats: * &#x60;partners/[PARTNER_ID]/customers/[CUSTOMER_ID]&#x60; * &#x60;partners/[PARTNER_ID]/vendors/[VENDOR_ID]&#x60; * &#x60;partners/[PARTNER_ID]/vendors/[VENDOR_ID]/customers/[CUSTOMER_ID]&#x60; Assigned by the server. | [optional] [readonly] 
**owner_emails** | **List[str]** | Required. Input only. Email address of customer&#39;s users in the owner role. At least one &#x60;owner_email&#x60; is required. Owners share the same access as admins but can also add, delete, and edit your organization&#39;s portal users. | [optional] 
**skip_welcome_email** | **bool** | Input only. If set to true, welcome email will not be sent to the customer. It is recommended to skip the welcome email if devices will be claimed with additional DEVICE_PROTECTION service, as the customer will receive separate emails at device claim time. This field is ignored if this is not a Zero-touch customer. | [optional] 
**terms_status** | **str** | Output only. Whether any user from the company has accepted the latest Terms of Service (ToS). See TermsStatus. | [optional] [readonly] 

## Example

```python
from openapi_client.models.company import Company

# TODO update the JSON string below
json = "{}"
# create an instance of Company from a JSON string
company_instance = Company.from_json(json)
# print the JSON string representation of the object
print(Company.to_json())

# convert the object into a dict
company_dict = company_instance.to_dict()
# create an instance of Company from a dict
company_from_dict = Company.from_dict(company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


