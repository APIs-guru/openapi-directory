# GetHTMLUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**GetHTMLUsingGET200ResponseData**](GetHTMLUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_html_using_get200_response import GetHTMLUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetHTMLUsingGET200Response from a JSON string
get_html_using_get200_response_instance = GetHTMLUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(GetHTMLUsingGET200Response.to_json())

# convert the object into a dict
get_html_using_get200_response_dict = get_html_using_get200_response_instance.to_dict()
# create an instance of GetHTMLUsingGET200Response from a dict
get_html_using_get200_response_from_dict = GetHTMLUsingGET200Response.from_dict(get_html_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


