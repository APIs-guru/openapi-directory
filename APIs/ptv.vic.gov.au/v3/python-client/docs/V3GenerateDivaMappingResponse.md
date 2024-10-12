# V3GenerateDivaMappingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mapping_version** | **str** |  | [optional] [readonly] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_generate_diva_mapping_response import V3GenerateDivaMappingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3GenerateDivaMappingResponse from a JSON string
v3_generate_diva_mapping_response_instance = V3GenerateDivaMappingResponse.from_json(json)
# print the JSON string representation of the object
print(V3GenerateDivaMappingResponse.to_json())

# convert the object into a dict
v3_generate_diva_mapping_response_dict = v3_generate_diva_mapping_response_instance.to_dict()
# create an instance of V3GenerateDivaMappingResponse from a dict
v3_generate_diva_mapping_response_from_dict = V3GenerateDivaMappingResponse.from_dict(v3_generate_diva_mapping_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


