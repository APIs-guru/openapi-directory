# ReleaseCreateRequestIpaUuidsInner

An object containing a UUID for an architecture for an iOS app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The architecture that the UUID belongs to, i.e. armv7 or arm64. | 
**uuid** | **str** | The unique identifier. | 

## Example

```python
from openapi_client.models.release_create_request_ipa_uuids_inner import ReleaseCreateRequestIpaUuidsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseCreateRequestIpaUuidsInner from a JSON string
release_create_request_ipa_uuids_inner_instance = ReleaseCreateRequestIpaUuidsInner.from_json(json)
# print the JSON string representation of the object
print(ReleaseCreateRequestIpaUuidsInner.to_json())

# convert the object into a dict
release_create_request_ipa_uuids_inner_dict = release_create_request_ipa_uuids_inner_instance.to_dict()
# create an instance of ReleaseCreateRequestIpaUuidsInner from a dict
release_create_request_ipa_uuids_inner_from_dict = ReleaseCreateRequestIpaUuidsInner.from_dict(release_create_request_ipa_uuids_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


