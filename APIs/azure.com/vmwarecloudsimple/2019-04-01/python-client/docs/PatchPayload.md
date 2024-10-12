# PatchPayload

General patch payload modal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Tags model | [optional] 

## Example

```python
from openapi_client.models.patch_payload import PatchPayload

# TODO update the JSON string below
json = "{}"
# create an instance of PatchPayload from a JSON string
patch_payload_instance = PatchPayload.from_json(json)
# print the JSON string representation of the object
print(PatchPayload.to_json())

# convert the object into a dict
patch_payload_dict = patch_payload_instance.to_dict()
# create an instance of PatchPayload from a dict
patch_payload_from_dict = PatchPayload.from_dict(patch_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


