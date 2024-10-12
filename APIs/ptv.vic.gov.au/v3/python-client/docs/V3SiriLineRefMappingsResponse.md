# V3SiriLineRefMappingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_refs** | [**Dict[str, V3SiriLineRefDirectionRefsDictionary]**](V3SiriLineRefDirectionRefsDictionary.md) |  | [optional] 
**mapping_version** | **str** |  | [optional] [readonly] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_siri_line_ref_mappings_response import V3SiriLineRefMappingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriLineRefMappingsResponse from a JSON string
v3_siri_line_ref_mappings_response_instance = V3SiriLineRefMappingsResponse.from_json(json)
# print the JSON string representation of the object
print(V3SiriLineRefMappingsResponse.to_json())

# convert the object into a dict
v3_siri_line_ref_mappings_response_dict = v3_siri_line_ref_mappings_response_instance.to_dict()
# create an instance of V3SiriLineRefMappingsResponse from a dict
v3_siri_line_ref_mappings_response_from_dict = V3SiriLineRefMappingsResponse.from_dict(v3_siri_line_ref_mappings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


