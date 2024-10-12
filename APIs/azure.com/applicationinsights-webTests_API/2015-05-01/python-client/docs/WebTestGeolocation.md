# WebTestGeolocation

Geo-physical location to run a web test from. You must specify one or more locations for the test to run from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Location ID for the webtest to run from. | [optional] 

## Example

```python
from openapi_client.models.web_test_geolocation import WebTestGeolocation

# TODO update the JSON string below
json = "{}"
# create an instance of WebTestGeolocation from a JSON string
web_test_geolocation_instance = WebTestGeolocation.from_json(json)
# print the JSON string representation of the object
print(WebTestGeolocation.to_json())

# convert the object into a dict
web_test_geolocation_dict = web_test_geolocation_instance.to_dict()
# create an instance of WebTestGeolocation from a dict
web_test_geolocation_from_dict = WebTestGeolocation.from_dict(web_test_geolocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


