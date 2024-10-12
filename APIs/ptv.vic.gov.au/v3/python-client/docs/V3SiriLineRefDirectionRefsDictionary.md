# V3SiriLineRefDirectionRefsDictionary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_refs** | **Dict[str, List[V3SiriReferenceDataDetail]]** |  | [optional] 
**unmatched_direction_refs** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.v3_siri_line_ref_direction_refs_dictionary import V3SiriLineRefDirectionRefsDictionary

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriLineRefDirectionRefsDictionary from a JSON string
v3_siri_line_ref_direction_refs_dictionary_instance = V3SiriLineRefDirectionRefsDictionary.from_json(json)
# print the JSON string representation of the object
print(V3SiriLineRefDirectionRefsDictionary.to_json())

# convert the object into a dict
v3_siri_line_ref_direction_refs_dictionary_dict = v3_siri_line_ref_direction_refs_dictionary_instance.to_dict()
# create an instance of V3SiriLineRefDirectionRefsDictionary from a dict
v3_siri_line_ref_direction_refs_dictionary_from_dict = V3SiriLineRefDirectionRefsDictionary.from_dict(v3_siri_line_ref_direction_refs_dictionary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


