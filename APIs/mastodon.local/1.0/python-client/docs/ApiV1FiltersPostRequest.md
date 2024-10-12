# ApiV1FiltersPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **List[str]** | Array of enumerable strings &#x60;home&#x60;, &#x60;notifications&#x60;, &#x60;public&#x60;, &#x60;thread&#x60;. At least one context must be specified. | 
**expires_in** | **int** | Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn&#39;t expire. | [optional] 
**irreversible** | **bool** | Should the server irreversibly drop matching entities from home and notifications? | [optional] 
**phrase** | **str** | Text to be filtered. | 
**whole_word** | **bool** | Consider word boundaries? | [optional] 

## Example

```python
from openapi_client.models.api_v1_filters_post_request import ApiV1FiltersPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1FiltersPostRequest from a JSON string
api_v1_filters_post_request_instance = ApiV1FiltersPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1FiltersPostRequest.to_json())

# convert the object into a dict
api_v1_filters_post_request_dict = api_v1_filters_post_request_instance.to_dict()
# create an instance of ApiV1FiltersPostRequest from a dict
api_v1_filters_post_request_from_dict = ApiV1FiltersPostRequest.from_dict(api_v1_filters_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


