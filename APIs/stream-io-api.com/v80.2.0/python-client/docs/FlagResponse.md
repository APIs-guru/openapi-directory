# FlagResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**flag** | [**Flag**](Flag.md) |  | [optional] 

## Example

```python
from openapi_client.models.flag_response import FlagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FlagResponse from a JSON string
flag_response_instance = FlagResponse.from_json(json)
# print the JSON string representation of the object
print(FlagResponse.to_json())

# convert the object into a dict
flag_response_dict = flag_response_instance.to_dict()
# create an instance of FlagResponse from a dict
flag_response_from_dict = FlagResponse.from_dict(flag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


