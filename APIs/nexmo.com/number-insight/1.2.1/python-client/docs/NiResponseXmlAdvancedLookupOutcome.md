# NiResponseXmlAdvancedLookupOutcome

An object indicating whether all information about a phone number has been returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **float** | Shows if all information about a phone number has been returned. Possible values:  Code | Text -- | -- 0 | Success 1 | Partial success - some fields populated 2 | Failed  | [optional] 
**lookup_outcome_message** | **str** | Shows if all information about a phone number has been returned. | [optional] 

## Example

```python
from openapi_client.models.ni_response_xml_advanced_lookup_outcome import NiResponseXmlAdvancedLookupOutcome

# TODO update the JSON string below
json = "{}"
# create an instance of NiResponseXmlAdvancedLookupOutcome from a JSON string
ni_response_xml_advanced_lookup_outcome_instance = NiResponseXmlAdvancedLookupOutcome.from_json(json)
# print the JSON string representation of the object
print(NiResponseXmlAdvancedLookupOutcome.to_json())

# convert the object into a dict
ni_response_xml_advanced_lookup_outcome_dict = ni_response_xml_advanced_lookup_outcome_instance.to_dict()
# create an instance of NiResponseXmlAdvancedLookupOutcome from a dict
ni_response_xml_advanced_lookup_outcome_from_dict = NiResponseXmlAdvancedLookupOutcome.from_dict(ni_response_xml_advanced_lookup_outcome_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


