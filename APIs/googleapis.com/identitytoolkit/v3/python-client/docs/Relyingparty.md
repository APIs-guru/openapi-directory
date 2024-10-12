# Relyingparty

Request of getting a code for user confirmation (reset password, change email etc.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_install_app** | **bool** | whether or not to install the android app on the device where the link is opened | [optional] 
**android_minimum_version** | **str** | minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app | [optional] 
**android_package_name** | **str** | android package name of the android app to handle the action code | [optional] 
**can_handle_code_in_app** | **bool** | whether or not the app can handle the oob code without first going to web | [optional] 
**captcha_resp** | **str** | The recaptcha response from the user. | [optional] 
**challenge** | **str** | The recaptcha challenge presented to the user. | [optional] 
**continue_url** | **str** | The url to continue to the Gitkit app | [optional] 
**email** | **str** | The email of the user. | [optional] 
**i_os_app_store_id** | **str** | iOS app store id to download the app if it&#39;s not already installed | [optional] 
**i_os_bundle_id** | **str** | the iOS bundle id of iOS app to handle the action code | [optional] 
**id_token** | **str** | The user&#39;s Gitkit login token for email change. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#relyingparty\&quot;. | [optional] [default to 'identitytoolkit#relyingparty']
**new_email** | **str** | The new email if the code is for email change. | [optional] 
**request_type** | **str** | The request type. | [optional] 
**user_ip** | **str** | The IP address of the user. | [optional] 

## Example

```python
from openapi_client.models.relyingparty import Relyingparty

# TODO update the JSON string below
json = "{}"
# create an instance of Relyingparty from a JSON string
relyingparty_instance = Relyingparty.from_json(json)
# print the JSON string representation of the object
print(Relyingparty.to_json())

# convert the object into a dict
relyingparty_dict = relyingparty_instance.to_dict()
# create an instance of Relyingparty from a dict
relyingparty_from_dict = Relyingparty.from_dict(relyingparty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


