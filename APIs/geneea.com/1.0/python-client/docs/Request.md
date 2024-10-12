# Request

Request encapsulation for simple API version 1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extractor** | **str** | [optional] Text extractor to be used when analyzing HTML document | [optional] 
**id** | **str** | Unique identifier of the document, it&#39;s optional | [optional] 
**language** | **str** | [optional] The language of the document, auto-detection will be used if omitted | [optional] 
**options** | **object** | [optional] Additional options for the internal modules (key-value pairs) | [optional] 
**return_text_info** | **bool** | [optional] Indicates whether to return the source text within the response object | [optional] 
**text** | **str** | The raw text to be analyzed, mutually exclusive with the &#39;url&#39; parameter | [optional] 
**url** | **str** | URL of a document to be analysed, mutually exclusive with the &#39;text&#39; parameter | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


