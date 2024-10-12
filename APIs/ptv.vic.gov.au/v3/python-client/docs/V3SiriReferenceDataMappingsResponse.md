# V3SiriReferenceDataMappingsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_refs** | [**Dict[str, V3SiriDirectionRefsDictionary]**](V3SiriDirectionRefsDictionary.md) | SIRI LineRef | [optional] [readonly] 
**mapping_version** | **str** |  | [optional] [readonly] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stop_point_refs** | [**Dict[str, V3StopPoint]**](V3StopPoint.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.v3_siri_reference_data_mappings_response import V3SiriReferenceDataMappingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriReferenceDataMappingsResponse from a JSON string
v3_siri_reference_data_mappings_response_instance = V3SiriReferenceDataMappingsResponse.from_json(json)
# print the JSON string representation of the object
print(V3SiriReferenceDataMappingsResponse.to_json())

# convert the object into a dict
v3_siri_reference_data_mappings_response_dict = v3_siri_reference_data_mappings_response_instance.to_dict()
# create an instance of V3SiriReferenceDataMappingsResponse from a dict
v3_siri_reference_data_mappings_response_from_dict = V3SiriReferenceDataMappingsResponse.from_dict(v3_siri_reference_data_mappings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


