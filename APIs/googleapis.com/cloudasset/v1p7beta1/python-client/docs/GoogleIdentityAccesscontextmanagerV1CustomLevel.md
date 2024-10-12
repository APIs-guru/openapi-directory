# GoogleIdentityAccesscontextmanagerV1CustomLevel

`CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expr** | [**Expr**](Expr.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_custom_level import GoogleIdentityAccesscontextmanagerV1CustomLevel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1CustomLevel from a JSON string
google_identity_accesscontextmanager_v1_custom_level_instance = GoogleIdentityAccesscontextmanagerV1CustomLevel.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1CustomLevel.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_custom_level_dict = google_identity_accesscontextmanager_v1_custom_level_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1CustomLevel from a dict
google_identity_accesscontextmanager_v1_custom_level_from_dict = GoogleIdentityAccesscontextmanagerV1CustomLevel.from_dict(google_identity_accesscontextmanager_v1_custom_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


