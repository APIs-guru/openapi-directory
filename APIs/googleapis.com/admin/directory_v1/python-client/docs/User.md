# User

The Directory API allows you to create and manage your account's users, user aliases, and user Google profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **object** | The list of the user&#39;s addresses. The maximum allowed data size for this field is 10KB. | [optional] 
**agreed_to_terms** | **bool** | Output only. This property is &#x60;true&#x60; if the user has completed an initial login and accepted the Terms of Service agreement. | [optional] [readonly] 
**aliases** | **List[str]** | Output only. The list of the user&#39;s alias email addresses. | [optional] [readonly] 
**archived** | **bool** | Indicates if user is archived. | [optional] 
**change_password_at_next_login** | **bool** | Indicates if the user is forced to change their password at next login. This setting doesn&#39;t apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224). | [optional] 
**creation_time** | **datetime** | User&#39;s G Suite account creation time. (Read-only) | [optional] [readonly] 
**custom_schemas** | **Dict[str, Dict[str, object]]** | Custom fields of the user. The key is a &#x60;schema_name&#x60; and its values are &#x60;&#39;field_name&#39;: &#39;field_value&#39;&#x60;. | [optional] 
**customer_id** | **str** | Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias &#x60;my_customer&#x60; to represent your account&#39;s &#x60;customerId&#x60;. As a reseller administrator, you can use the resold customer account&#39;s &#x60;customerId&#x60;. To get a &#x60;customerId&#x60;, use the account&#39;s primary domain in the &#x60;domain&#x60; parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request. | [optional] [readonly] 
**deletion_time** | **datetime** |  | [optional] [readonly] 
**emails** | **object** | The list of the user&#39;s email addresses. The maximum allowed data size for this field is 10KB. This excludes &#x60;publicKeyEncryptionCertificates&#x60;. | [optional] 
**etag** | **str** | Output only. ETag of the resource. | [optional] [readonly] 
**external_ids** | **object** | The list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2KB. | [optional] 
**gender** | **object** | The user&#39;s gender. The maximum allowed data size for this field is 1KB. | [optional] 
**hash_function** | **str** | Stores the hash format of the &#x60;password&#x60; property. The following &#x60;hashFunction&#x60; values are allowed: * &#x60;MD5&#x60; - Accepts simple hex-encoded values. * &#x60;SHA-1&#x60; - Accepts simple hex-encoded values. * &#x60;crypt&#x60; - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix &#x60;$1$&#x60;), SHA-256 (hash prefix &#x60;$5$&#x60;), and SHA-512 (hash prefix &#x60;$6$&#x60;) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer. | [optional] 
**id** | **str** | The unique ID for the user. A user &#x60;id&#x60; can be used as a user request URI&#39;s &#x60;userKey&#x60;. | [optional] 
**ims** | **object** | The list of the user&#39;s Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2KB. | [optional] 
**include_in_global_address_list** | **bool** | Indicates if the user&#39;s profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988). | [optional] 
**ip_whitelisted** | **bool** | If &#x60;true&#x60;, the user&#39;s IP address is subject to a deprecated IP address [&#x60;allowlist&#x60;](https://support.google.com/a/answer/60752) configuration. | [optional] 
**is_admin** | **bool** | Output only. Indicates a user with super admininistrator privileges. The &#x60;isAdmin&#x60; property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service. | [optional] [readonly] 
**is_delegated_admin** | **bool** | Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325). | [optional] [readonly] 
**is_enforced_in2_sv** | **bool** | Output only. Is 2-step verification enforced (Read-only) | [optional] [readonly] 
**is_enrolled_in2_sv** | **bool** | Output only. Is enrolled in 2-step verification (Read-only) | [optional] [readonly] 
**is_mailbox_setup** | **bool** | Output only. Indicates if the user&#39;s Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license. | [optional] [readonly] 
**keywords** | **object** | The list of the user&#39;s keywords. The maximum allowed data size for this field is 1KB. | [optional] 
**kind** | **str** | Output only. The type of the API resource. For Users resources, the value is &#x60;admin#directory#user&#x60;. | [optional] [readonly] [default to 'admin#directory#user']
**languages** | **object** | The user&#39;s languages. The maximum allowed data size for this field is 1KB. | [optional] 
**last_login_time** | **datetime** | User&#39;s last login time. (Read-only) | [optional] [readonly] 
**locations** | **object** | The user&#39;s locations. The maximum allowed data size for this field is 10KB. | [optional] 
**name** | [**UserName**](UserName.md) |  | [optional] 
**non_editable_aliases** | **List[str]** | Output only. The list of the user&#39;s non-editable alias email addresses. These are typically outside the account&#39;s primary domain or sub-domain. | [optional] [readonly] 
**notes** | **object** | Notes for the user. | [optional] 
**org_unit_path** | **str** | The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (&#x60;/&#x60;). | [optional] 
**organizations** | **object** | The list of organizations the user belongs to. The maximum allowed data size for this field is 10KB. | [optional] 
**password** | **str** | User&#39;s password | [optional] 
**phones** | **object** | The list of the user&#39;s phone numbers. The maximum allowed data size for this field is 1KB. | [optional] 
**posix_accounts** | **object** | The list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user. | [optional] 
**primary_email** | **str** | The user&#39;s primary email address. This property is required in a request to create a user account. The &#x60;primaryEmail&#x60; must be unique and cannot be an alias of another user. | [optional] 
**recovery_email** | **str** | Recovery email of the user. | [optional] 
**recovery_phone** | **str** | Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*. | [optional] 
**relations** | **object** | The list of the user&#39;s relationships to other users. The maximum allowed data size for this field is 2KB. | [optional] 
**ssh_public_keys** | **object** | A list of SSH public keys. | [optional] 
**suspended** | **bool** | Indicates if user is suspended. | [optional] 
**suspension_reason** | **str** | Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the &#x60;suspended&#x60; property is &#x60;true&#x60;. | [optional] [readonly] 
**thumbnail_photo_etag** | **str** | Output only. ETag of the user&#39;s photo (Read-only) | [optional] [readonly] 
**thumbnail_photo_url** | **str** | Output only. The URL of the user&#39;s profile photo. The URL might be temporary or private. | [optional] [readonly] 
**websites** | **object** | The user&#39;s websites. The maximum allowed data size for this field is 2KB. | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


