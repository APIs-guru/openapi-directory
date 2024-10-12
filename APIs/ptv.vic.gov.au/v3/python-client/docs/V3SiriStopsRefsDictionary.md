# V3SiriStopsRefsDictionary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stop_point_refs** | [**Dict[str, V3SiriReferenceDataDetail]**](V3SiriReferenceDataDetail.md) |  | [optional] [readonly] 
**unmatched_stop_point_refs** | **Dict[str, str]** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.v3_siri_stops_refs_dictionary import V3SiriStopsRefsDictionary

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriStopsRefsDictionary from a JSON string
v3_siri_stops_refs_dictionary_instance = V3SiriStopsRefsDictionary.from_json(json)
# print the JSON string representation of the object
print(V3SiriStopsRefsDictionary.to_json())

# convert the object into a dict
v3_siri_stops_refs_dictionary_dict = v3_siri_stops_refs_dictionary_instance.to_dict()
# create an instance of V3SiriStopsRefsDictionary from a dict
v3_siri_stops_refs_dictionary_from_dict = V3SiriStopsRefsDictionary.from_dict(v3_siri_stops_refs_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


