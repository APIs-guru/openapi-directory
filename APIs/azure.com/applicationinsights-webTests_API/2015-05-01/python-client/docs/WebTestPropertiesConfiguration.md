# WebTestPropertiesConfiguration

An XML configuration specification for a WebTest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**web_test** | **str** | The XML specification of a WebTest to run against an application. | [optional] 

## Example

```python
from openapi_client.models.web_test_properties_configuration import WebTestPropertiesConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of WebTestPropertiesConfiguration from a JSON string
web_test_properties_configuration_instance = WebTestPropertiesConfiguration.from_json(json)
# print the JSON string representation of the object
print(WebTestPropertiesConfiguration.to_json())

# convert the object into a dict
web_test_properties_configuration_dict = web_test_properties_configuration_instance.to_dict()
# create an instance of WebTestPropertiesConfiguration from a dict
web_test_properties_configuration_from_dict = WebTestPropertiesConfiguration.from_dict(web_test_properties_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


