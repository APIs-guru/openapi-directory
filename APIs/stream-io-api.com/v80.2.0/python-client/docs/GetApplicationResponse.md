# GetApplicationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**App**](App.md) |  | 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.get_application_response import GetApplicationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetApplicationResponse from a JSON string
get_application_response_instance = GetApplicationResponse.from_json(json)
# print the JSON string representation of the object
print(GetApplicationResponse.to_json())

# convert the object into a dict
get_application_response_dict = get_application_response_instance.to_dict()
# create an instance of GetApplicationResponse from a dict
get_application_response_from_dict = GetApplicationResponse.from_dict(get_application_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


