# Enterprise

An Enterprises resource represents the binding between an EMM and a specific organization. That binding can be instantiated in one of two different ways using this API as follows: - For Google managed domain customers, the process involves using Enterprises.enroll and Enterprises.setAccount (in conjunction with artifacts obtained from the Admin console and the Google API Console) and submitted to the EMM through a more-or-less manual process. - For managed Google Play Accounts customers, the process involves using Enterprises.generateSignupUrl and Enterprises.completeSignup in conjunction with the managed Google Play sign-up UI (Google-provided mechanism) to create the binding without manual steps. As an EMM, you can support either or both approaches in your EMM console. See Create an Enterprise for details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator** | [**List[Administrator]**](Administrator.md) | Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow. | [optional] 
**google_authentication_settings** | [**GoogleAuthenticationSettings**](GoogleAuthenticationSettings.md) |  | [optional] 
**id** | **str** | The unique ID for the enterprise. | [optional] 
**name** | **str** | The name of the enterprise, for example, \&quot;Example, Inc\&quot;. | [optional] 
**primary_domain** | **str** | The enterprise&#39;s primary domain, such as \&quot;example.com\&quot;. | [optional] 

## Example

```python
from openapi_client.models.enterprise import Enterprise

# TODO update the JSON string below
json = "{}"
# create an instance of Enterprise from a JSON string
enterprise_instance = Enterprise.from_json(json)
# print the JSON string representation of the object
print(Enterprise.to_json())

# convert the object into a dict
enterprise_dict = enterprise_instance.to_dict()
# create an instance of Enterprise from a dict
enterprise_from_dict = Enterprise.from_dict(enterprise_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


