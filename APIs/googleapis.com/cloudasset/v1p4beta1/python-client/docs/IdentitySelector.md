# IdentitySelector

Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **str** | Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: \&quot;user:mike@example.com\&quot;, \&quot;group:admins@example.com\&quot;, \&quot;domain:google.com\&quot;, \&quot;serviceAccount:my-project-id@appspot.gserviceaccount.com\&quot;. Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity. | [optional] 

## Example

```python
from openapi_client.models.identity_selector import IdentitySelector

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitySelector from a JSON string
identity_selector_instance = IdentitySelector.from_json(json)
# print the JSON string representation of the object
print(IdentitySelector.to_json())

# convert the object into a dict
identity_selector_dict = identity_selector_instance.to_dict()
# create an instance of IdentitySelector from a dict
identity_selector_from_dict = IdentitySelector.from_dict(identity_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


