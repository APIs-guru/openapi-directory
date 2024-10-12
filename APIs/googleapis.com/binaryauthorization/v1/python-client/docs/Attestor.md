# Attestor

An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs. | [optional] 
**etag** | **str** | Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154. | [optional] 
**name** | **str** | Required. The resource name, in the format: &#x60;projects/*/attestors/*&#x60;. This field may not be updated. | [optional] 
**update_time** | **str** | Output only. Time when the attestor was last updated. | [optional] [readonly] 
**user_owned_grafeas_note** | [**UserOwnedGrafeasNote**](UserOwnedGrafeasNote.md) |  | [optional] 

## Example

```python
from openapi_client.models.attestor import Attestor

# TODO update the JSON string below
json = "{}"
# create an instance of Attestor from a JSON string
attestor_instance = Attestor.from_json(json)
# print the JSON string representation of the object
print(Attestor.to_json())

# convert the object into a dict
attestor_dict = attestor_instance.to_dict()
# create an instance of Attestor from a dict
attestor_from_dict = Attestor.from_dict(attestor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


