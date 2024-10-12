# Header

A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**glob** | **str** | The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path. | [optional] 
**headers** | **Dict[str, str]** | Required. The additional headers to add to the response. | [optional] 
**regex** | **str** | The user-supplied RE2 regular expression to match against the request URL path. | [optional] 

## Example

```python
from openapi_client.models.header import Header

# TODO update the JSON string below
json = "{}"
# create an instance of Header from a JSON string
header_instance = Header.from_json(json)
# print the JSON string representation of the object
print(Header.to_json())

# convert the object into a dict
header_dict = header_instance.to_dict()
# create an instance of Header from a dict
header_from_dict = Header.from_dict(header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


