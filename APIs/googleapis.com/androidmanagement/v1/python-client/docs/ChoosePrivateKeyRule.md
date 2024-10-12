# ChoosePrivateKeyRule

Controls apps' access to private keys. The rule determines which private key, if any, Android Device Policy grants to the specified app. Access is granted either when the app calls KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) (or any overloads) to request a private key alias for a given URL, or for rules that are not URL-specific (that is, if urlPattern is not set, or set to the empty string or .*) on Android 11 and above, directly so that the app can call KeyChain.getPrivateKey (https://developer.android.com/reference/android/security/KeyChain#getPrivateKey%28android.content.Context,%20java.lang.String%29), without first having to call KeyChain.choosePrivateKeyAlias.When an app calls KeyChain.choosePrivateKeyAlias if more than one choosePrivateKeyRules matches, the last matching rule defines which key alias to return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_names** | **List[str]** | The package names to which this rule applies. The hash of the signing certificate for each app is verified against the hash provided by Play. If no package names are specified, then the alias is provided to all apps that call KeyChain.choosePrivateKeyAlias (https://developer.android.com/reference/android/security/KeyChain#choosePrivateKeyAlias%28android.app.Activity,%20android.security.KeyChainAliasCallback,%20java.lang.String[],%20java.security.Principal[],%20java.lang.String,%20int,%20java.lang.String%29) or any overloads (but not without calling KeyChain.choosePrivateKeyAlias, even on Android 11 and above). Any app with the same Android UID as a package specified here will have access when they call KeyChain.choosePrivateKeyAlias. | [optional] 
**private_key_alias** | **str** | The alias of the private key to be used. | [optional] 
**url_pattern** | **str** | The URL pattern to match against the URL of the request. If not set or empty, it matches all URLs. This uses the regular expression syntax of java.util.regex.Pattern. | [optional] 

## Example

```python
from openapi_client.models.choose_private_key_rule import ChoosePrivateKeyRule

# TODO update the JSON string below
json = "{}"
# create an instance of ChoosePrivateKeyRule from a JSON string
choose_private_key_rule_instance = ChoosePrivateKeyRule.from_json(json)
# print the JSON string representation of the object
print(ChoosePrivateKeyRule.to_json())

# convert the object into a dict
choose_private_key_rule_dict = choose_private_key_rule_instance.to_dict()
# create an instance of ChoosePrivateKeyRule from a dict
choose_private_key_rule_from_dict = ChoosePrivateKeyRule.from_dict(choose_private_key_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


