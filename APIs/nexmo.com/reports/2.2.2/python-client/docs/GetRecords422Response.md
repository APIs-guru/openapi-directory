# GetRecords422Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** |  | [optional] 
**invalid_parameters** | [**List[GetRecords422ResponseOneOf1InvalidParametersInner]**](GetRecords422ResponseOneOf1InvalidParametersInner.md) |  | [optional] 
**title** | **str** |  | [optional] 
**detail** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_records422_response import GetRecords422Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecords422Response from a JSON string
get_records422_response_instance = GetRecords422Response.from_json(json)
# print the JSON string representation of the object
print(GetRecords422Response.to_json())

# convert the object into a dict
get_records422_response_dict = get_records422_response_instance.to_dict()
# create an instance of GetRecords422Response from a dict
get_records422_response_from_dict = GetRecords422Response.from_dict(get_records422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


