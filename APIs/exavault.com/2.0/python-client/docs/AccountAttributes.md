# AccountAttributes



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | Name of the account | [optional] 
**account_onboarding** | **bool** | Whether the web application onboarding help is enabled for new users in the account. | [optional] 
**allowed_ip** | [**List[AccountAttributesAllowedIpInner]**](AccountAttributesAllowedIpInner.md) | Range of IP addresses allowed to access this account. | [optional] 
**branding** | **bool** | Branding flag. Set to &#x60;true&#x60; if the account has branding functionality enabled. | [optional] 
**branding_settings** | [**BrandingSettings**](BrandingSettings.md) |  | [optional] 
**client_id** | **int** | (ExaVault Use Only) Internal ID of the account in CMS. | [optional] 
**complex_passwords** | **bool** | Flag to indicate whether the account requires complex passwords. Set to &#x60;true&#x60; to require complex passwords on all users and shares. | [optional] 
**created** | **datetime** | Timestamp of account creation. | [optional] 
**custom_domain** | **bool** | Custom domain flag. Set to &#x60;true&#x60; if account type allows custom domain functionality. | [optional] 
**custom_signature** | **str** | Custom signature for all account emails users or recipients will receive. | [optional] 
**external_domains** | **List[str]** | Custom domain used to brand this account. | [optional] 
**max_users** | **int** | Maximum number of users the account can have. This can be increased by contacting ExaVault Support. | [optional] 
**modified** | **datetime** | Timestamp of account modification. | [optional] 
**plan_details** | [**PlanDetails**](PlanDetails.md) |  | [optional] 
**quota** | [**Quota**](Quota.md) |  | [optional] 
**secure_only** | **bool** | Flag to indicate whether the account disables connections via insecure protocols (e.g. FTP). Set to &#x60;true&#x60; to disable all traffic over port 21. | [optional] 
**show_referral_links** | **bool** | Flag to indicate showing of referrals links in the account. Set to &#x60;true&#x60; to include marketing messages in share invitations. | [optional] 
**status** | **int** | Account status flag. A one (1) means the account is active; zero (0) means it is suspended. | [optional] 
**user_count** | **int** | Current number of users on the account. | [optional] 
**welcome_email_content** | **str** | Content of welcome email each new user will receive. | [optional] 
**welcome_email_subject** | **str** | Subject of welcome email each new user will receive. | [optional] 

## Example

```python
from openapi_client.models.account_attributes import AccountAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AccountAttributes from a JSON string
account_attributes_instance = AccountAttributes.from_json(json)
# print the JSON string representation of the object
print(AccountAttributes.to_json())

# convert the object into a dict
account_attributes_dict = account_attributes_instance.to_dict()
# create an instance of AccountAttributes from a dict
account_attributes_from_dict = AccountAttributes.from_dict(account_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


