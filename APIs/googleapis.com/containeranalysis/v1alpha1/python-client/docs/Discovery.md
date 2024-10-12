# Discovery

A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis. The occurrence's operation will indicate the status of the analysis. Absence of an occurrence linked to this note for a resource indicates that analysis hasn't started.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_kind** | **str** | The kind of analysis that is handled by this discovery. | [optional] 

## Example

```python
from openapi_client.models.discovery import Discovery

# TODO update the JSON string below
json = "{}"
# create an instance of Discovery from a JSON string
discovery_instance = Discovery.from_json(json)
# print the JSON string representation of the object
print(Discovery.to_json())

# convert the object into a dict
discovery_dict = discovery_instance.to_dict()
# create an instance of Discovery from a dict
discovery_from_dict = Discovery.from_dict(discovery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


