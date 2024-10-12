# GetRecords403Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_records403_response import GetRecords403Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecords403Response from a JSON string
get_records403_response_instance = GetRecords403Response.from_json(json)
# print the JSON string representation of the object
print(GetRecords403Response.to_json())

# convert the object into a dict
get_records403_response_dict = get_records403_response_instance.to_dict()
# create an instance of GetRecords403Response from a dict
get_records403_response_from_dict = GetRecords403Response.from_dict(get_records403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


