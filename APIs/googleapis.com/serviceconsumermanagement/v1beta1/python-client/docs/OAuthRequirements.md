# OAuthRequirements

OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for \"Read-only access to Google Calendar\" and \"Access to Cloud Platform\". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_scopes** | **str** | The list of publicly documented OAuth scopes that are allowed access. An OAuth token containing any of these scopes will be accepted. Example: canonical_scopes: https://www.googleapis.com/auth/calendar, https://www.googleapis.com/auth/calendar.read | [optional] 

## Example

```python
from openapi_client.models.o_auth_requirements import OAuthRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthRequirements from a JSON string
o_auth_requirements_instance = OAuthRequirements.from_json(json)
# print the JSON string representation of the object
print(OAuthRequirements.to_json())

# convert the object into a dict
o_auth_requirements_dict = o_auth_requirements_instance.to_dict()
# create an instance of OAuthRequirements from a dict
o_auth_requirements_from_dict = OAuthRequirements.from_dict(o_auth_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


