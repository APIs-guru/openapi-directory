# ResponseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **str** | first page of query | 
**last** | **str** | last page of query | 
**next** | **str** | next page in query | [optional] 
**prev** | **str** | previous page in query | [optional] 

## Example

```python
from openapi_client.models.response_links import ResponseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseLinks from a JSON string
response_links_instance = ResponseLinks.from_json(json)
# print the JSON string representation of the object
print(ResponseLinks.to_json())

# convert the object into a dict
response_links_dict = response_links_instance.to_dict()
# create an instance of ResponseLinks from a dict
response_links_from_dict = ResponseLinks.from_dict(response_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


