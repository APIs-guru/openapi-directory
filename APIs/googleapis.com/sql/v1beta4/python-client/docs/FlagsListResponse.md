# FlagsListResponse

Flags list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Flag]**](Flag.md) | List of flags. | [optional] 
**kind** | **str** | This is always &#x60;sql#flagsList&#x60;. | [optional] 

## Example

```python
from openapi_client.models.flags_list_response import FlagsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FlagsListResponse from a JSON string
flags_list_response_instance = FlagsListResponse.from_json(json)
# print the JSON string representation of the object
print(FlagsListResponse.to_json())

# convert the object into a dict
flags_list_response_dict = flags_list_response_instance.to_dict()
# create an instance of FlagsListResponse from a dict
flags_list_response_from_dict = FlagsListResponse.from_dict(flags_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


