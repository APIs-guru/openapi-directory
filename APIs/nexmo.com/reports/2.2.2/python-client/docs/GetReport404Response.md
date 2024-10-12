# GetReport404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_report404_response import GetReport404Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetReport404Response from a JSON string
get_report404_response_instance = GetReport404Response.from_json(json)
# print the JSON string representation of the object
print(GetReport404Response.to_json())

# convert the object into a dict
get_report404_response_dict = get_report404_response_instance.to_dict()
# create an instance of GetReport404Response from a dict
get_report404_response_from_dict = GetReport404Response.from_dict(get_report404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


