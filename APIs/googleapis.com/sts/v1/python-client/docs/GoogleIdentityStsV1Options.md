# GoogleIdentityStsV1Options

An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_boundary** | [**GoogleIdentityStsV1AccessBoundary**](GoogleIdentityStsV1AccessBoundary.md) |  | [optional] 
**audiences** | **List[str]** | The intended audience(s) of the credential. The audience value(s) should be the name(s) of services intended to receive the credential. Example: &#x60;[\&quot;https://pubsub.googleapis.com/\&quot;, \&quot;https://storage.googleapis.com/\&quot;]&#x60;. A maximum of 5 audiences can be included. For each provided audience, the maximum length is 262 characters. | [optional] 
**user_project** | **str** | A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: &#x60;my-sample-project-191923&#x60;. The maximum length is 32 characters. | [optional] 

## Example

```python
from openapi_client.models.google_identity_sts_v1_options import GoogleIdentityStsV1Options

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityStsV1Options from a JSON string
google_identity_sts_v1_options_instance = GoogleIdentityStsV1Options.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityStsV1Options.to_json())

# convert the object into a dict
google_identity_sts_v1_options_dict = google_identity_sts_v1_options_instance.to_dict()
# create an instance of GoogleIdentityStsV1Options from a dict
google_identity_sts_v1_options_from_dict = GoogleIdentityStsV1Options.from_dict(google_identity_sts_v1_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


