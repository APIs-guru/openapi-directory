# DiscoveryNote

A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_kind** | **str** | Required. Immutable. The kind of analysis that is handled by this discovery. | [optional] 

## Example

```python
from openapi_client.models.discovery_note import DiscoveryNote

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveryNote from a JSON string
discovery_note_instance = DiscoveryNote.from_json(json)
# print the JSON string representation of the object
print(DiscoveryNote.to_json())

# convert the object into a dict
discovery_note_dict = discovery_note_instance.to_dict()
# create an instance of DiscoveryNote from a dict
discovery_note_from_dict = DiscoveryNote.from_dict(discovery_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


