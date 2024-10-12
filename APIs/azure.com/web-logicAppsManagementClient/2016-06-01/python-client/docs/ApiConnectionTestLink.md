# ApiConnectionTestLink

API connection properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | HTTP Method | [optional] 
**request_uri** | **str** | Test link request URI | [optional] 

## Example

```python
from openapi_client.models.api_connection_test_link import ApiConnectionTestLink

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConnectionTestLink from a JSON string
api_connection_test_link_instance = ApiConnectionTestLink.from_json(json)
# print the JSON string representation of the object
print(ApiConnectionTestLink.to_json())

# convert the object into a dict
api_connection_test_link_dict = api_connection_test_link_instance.to_dict()
# create an instance of ApiConnectionTestLink from a dict
api_connection_test_link_from_dict = ApiConnectionTestLink.from_dict(api_connection_test_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


