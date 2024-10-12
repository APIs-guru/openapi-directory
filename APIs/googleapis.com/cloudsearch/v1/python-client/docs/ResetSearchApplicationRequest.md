# ResetSearchApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.reset_search_application_request import ResetSearchApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ResetSearchApplicationRequest from a JSON string
reset_search_application_request_instance = ResetSearchApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(ResetSearchApplicationRequest.to_json())

# convert the object into a dict
reset_search_application_request_dict = reset_search_application_request_instance.to_dict()
# create an instance of ResetSearchApplicationRequest from a dict
reset_search_application_request_from_dict = ResetSearchApplicationRequest.from_dict(reset_search_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


