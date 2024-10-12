# DSSEHint

This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from \"readable\" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**human_readable_name** | **str** | Required. The human readable name of this attestation authority, for example \&quot;cloudbuild-prod\&quot;. | [optional] 

## Example

```python
from openapi_client.models.dsse_hint import DSSEHint

# TODO update the JSON string below
json = "{}"
# create an instance of DSSEHint from a JSON string
dsse_hint_instance = DSSEHint.from_json(json)
# print the JSON string representation of the object
print(DSSEHint.to_json())

# convert the object into a dict
dsse_hint_dict = dsse_hint_instance.to_dict()
# create an instance of DSSEHint from a dict
dsse_hint_from_dict = DSSEHint.from_dict(dsse_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


