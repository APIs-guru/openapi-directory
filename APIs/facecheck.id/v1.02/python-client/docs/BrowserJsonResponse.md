# BrowserJsonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**error** | **str** |  | [optional] 
**has_empty_images** | **bool** |  | [optional] [readonly] 
**id_search** | **str** |  | [optional] 
**input** | [**List[InputImage]**](InputImage.md) |  | [optional] 
**message** | **str** |  | [optional] 
**output** | [**SearchResults**](SearchResults.md) |  | [optional] 
**progress** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.browser_json_response import BrowserJsonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BrowserJsonResponse from a JSON string
browser_json_response_instance = BrowserJsonResponse.from_json(json)
# print the JSON string representation of the object
print(BrowserJsonResponse.to_json())

# convert the object into a dict
browser_json_response_dict = browser_json_response_instance.to_dict()
# create an instance of BrowserJsonResponse from a dict
browser_json_response_from_dict = BrowserJsonResponse.from_dict(browser_json_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


