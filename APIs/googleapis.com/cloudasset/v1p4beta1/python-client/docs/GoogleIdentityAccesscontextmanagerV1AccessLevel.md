# GoogleIdentityAccesscontextmanagerV1AccessLevel

An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic** | [**GoogleIdentityAccesscontextmanagerV1BasicLevel**](GoogleIdentityAccesscontextmanagerV1BasicLevel.md) |  | [optional] 
**custom** | [**GoogleIdentityAccesscontextmanagerV1CustomLevel**](GoogleIdentityAccesscontextmanagerV1CustomLevel.md) |  | [optional] 
**description** | **str** | Description of the &#x60;AccessLevel&#x60; and its use. Does not affect behavior. | [optional] 
**name** | **str** | Required. Resource name for the Access Level. The &#x60;short_name&#x60; component must begin with a letter and only include alphanumeric and &#39;_&#39;. Format: &#x60;accessPolicies/{access_policy}/accessLevels/{access_level}&#x60;. The maximum length of the &#x60;access_level&#x60; component is 50 characters. | [optional] 
**title** | **str** | Human readable title. Must be unique within the Policy. | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_access_level import GoogleIdentityAccesscontextmanagerV1AccessLevel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1AccessLevel from a JSON string
google_identity_accesscontextmanager_v1_access_level_instance = GoogleIdentityAccesscontextmanagerV1AccessLevel.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1AccessLevel.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_access_level_dict = google_identity_accesscontextmanager_v1_access_level_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1AccessLevel from a dict
google_identity_accesscontextmanager_v1_access_level_from_dict = GoogleIdentityAccesscontextmanagerV1AccessLevel.from_dict(google_identity_accesscontextmanager_v1_access_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


