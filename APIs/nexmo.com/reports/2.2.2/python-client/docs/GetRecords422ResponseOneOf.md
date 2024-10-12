# GetRecords422ResponseOneOf

Missing parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** |  | [optional] 
**invalid_parameters** | [**List[GetRecords422ResponseOneOfInvalidParametersInner]**](GetRecords422ResponseOneOfInvalidParametersInner.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_records422_response_one_of import GetRecords422ResponseOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecords422ResponseOneOf from a JSON string
get_records422_response_one_of_instance = GetRecords422ResponseOneOf.from_json(json)
# print the JSON string representation of the object
print(GetRecords422ResponseOneOf.to_json())

# convert the object into a dict
get_records422_response_one_of_dict = get_records422_response_one_of_instance.to_dict()
# create an instance of GetRecords422ResponseOneOf from a dict
get_records422_response_one_of_from_dict = GetRecords422ResponseOneOf.from_dict(get_records422_response_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


