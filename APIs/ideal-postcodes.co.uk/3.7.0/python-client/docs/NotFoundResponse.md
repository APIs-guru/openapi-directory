# NotFoundResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | &#x60;404X&#x60; type error response code | 
**message** | **str** | Resource not found error description | 

## Example

```python
from openapi_client.models.not_found_response import NotFoundResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotFoundResponse from a JSON string
not_found_response_instance = NotFoundResponse.from_json(json)
# print the JSON string representation of the object
print(NotFoundResponse.to_json())

# convert the object into a dict
not_found_response_dict = not_found_response_instance.to_dict()
# create an instance of NotFoundResponse from a dict
not_found_response_from_dict = NotFoundResponse.from_dict(not_found_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


