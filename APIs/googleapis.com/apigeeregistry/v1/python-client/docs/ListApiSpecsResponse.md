# ListApiSpecsResponse

Response message for ListApiSpecs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_specs** | [**List[ApiSpec]**](ApiSpec.md) | The specs from the specified publisher. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_api_specs_response import ListApiSpecsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListApiSpecsResponse from a JSON string
list_api_specs_response_instance = ListApiSpecsResponse.from_json(json)
# print the JSON string representation of the object
print(ListApiSpecsResponse.to_json())

# convert the object into a dict
list_api_specs_response_dict = list_api_specs_response_instance.to_dict()
# create an instance of ListApiSpecsResponse from a dict
list_api_specs_response_from_dict = ListApiSpecsResponse.from_dict(list_api_specs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


