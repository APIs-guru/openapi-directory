# WebTest

An Application Insights web test definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of web test that this web test watches. Choices are ping and multistep. | [optional] [default to 'ping']
**properties** | [**WebTestProperties**](WebTestProperties.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_test import WebTest

# TODO update the JSON string below
json = "{}"
# create an instance of WebTest from a JSON string
web_test_instance = WebTest.from_json(json)
# print the JSON string representation of the object
print(WebTest.to_json())

# convert the object into a dict
web_test_dict = web_test_instance.to_dict()
# create an instance of WebTest from a dict
web_test_from_dict = WebTest.from_dict(web_test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


