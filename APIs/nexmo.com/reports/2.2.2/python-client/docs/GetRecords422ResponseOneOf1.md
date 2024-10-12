# GetRecords422ResponseOneOf1

Invalid Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** |  | [optional] 
**invalid_parameters** | [**List[GetRecords422ResponseOneOf1InvalidParametersInner]**](GetRecords422ResponseOneOf1InvalidParametersInner.md) |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_records422_response_one_of1 import GetRecords422ResponseOneOf1

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecords422ResponseOneOf1 from a JSON string
get_records422_response_one_of1_instance = GetRecords422ResponseOneOf1.from_json(json)
# print the JSON string representation of the object
print(GetRecords422ResponseOneOf1.to_json())

# convert the object into a dict
get_records422_response_one_of1_dict = get_records422_response_one_of1_instance.to_dict()
# create an instance of GetRecords422ResponseOneOf1 from a dict
get_records422_response_one_of1_from_dict = GetRecords422ResponseOneOf1.from_dict(get_records422_response_one_of1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


