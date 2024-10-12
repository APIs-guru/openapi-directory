# V3SiriDirectionRefsDictionary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_refs** | [**Dict[str, V3SiriStopsRefsDictionary]**](V3SiriStopsRefsDictionary.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.v3_siri_direction_refs_dictionary import V3SiriDirectionRefsDictionary

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriDirectionRefsDictionary from a JSON string
v3_siri_direction_refs_dictionary_instance = V3SiriDirectionRefsDictionary.from_json(json)
# print the JSON string representation of the object
print(V3SiriDirectionRefsDictionary.to_json())

# convert the object into a dict
v3_siri_direction_refs_dictionary_dict = v3_siri_direction_refs_dictionary_instance.to_dict()
# create an instance of V3SiriDirectionRefsDictionary from a dict
v3_siri_direction_refs_dictionary_from_dict = V3SiriDirectionRefsDictionary.from_dict(v3_siri_direction_refs_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


