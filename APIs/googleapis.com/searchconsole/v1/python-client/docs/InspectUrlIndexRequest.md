# InspectUrlIndexRequest

Index inspection request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspection_url** | **str** | Required. URL to inspect. Must be under the property specified in \&quot;site_url\&quot;. | [optional] 
**language_code** | **str** | Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code representing the requested language for translated issue messages, e.g. \&quot;en-US\&quot;, \&quot;or \&quot;de-CH\&quot;. Default value is \&quot;en-US\&quot;. | [optional] 
**site_url** | **str** | Required. The URL of the property as defined in Search Console. **Examples:** &#x60;http://www.example.com/&#x60; for a URL-prefix property, or &#x60;sc-domain:example.com&#x60; for a Domain property. | [optional] 

## Example

```python
from openapi_client.models.inspect_url_index_request import InspectUrlIndexRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InspectUrlIndexRequest from a JSON string
inspect_url_index_request_instance = InspectUrlIndexRequest.from_json(json)
# print the JSON string representation of the object
print(InspectUrlIndexRequest.to_json())

# convert the object into a dict
inspect_url_index_request_dict = inspect_url_index_request_instance.to_dict()
# create an instance of InspectUrlIndexRequest from a dict
inspect_url_index_request_from_dict = InspectUrlIndexRequest.from_dict(inspect_url_index_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


