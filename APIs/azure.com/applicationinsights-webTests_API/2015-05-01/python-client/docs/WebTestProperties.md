# WebTestProperties

Metadata describing a web test for an Azure resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**WebTestPropertiesConfiguration**](WebTestPropertiesConfiguration.md) |  | [optional] 
**description** | **str** | Purpose/user defined descriptive test for this WebTest. | [optional] 
**enabled** | **bool** | Is the test actively being monitored. | [optional] 
**frequency** | **int** | Interval in seconds between test runs for this WebTest. Default value is 300. | [optional] [default to 300]
**kind** | **str** | The kind of web test this is, valid choices are ping and multistep. | [default to 'ping']
**locations** | [**List[WebTestGeolocation]**](WebTestGeolocation.md) | A list of where to physically run the tests from to give global coverage for accessibility of your application. | 
**name** | **str** | User defined name if this WebTest. | 
**retry_enabled** | **bool** | Allow for retries should this WebTest fail. | [optional] 
**synthetic_monitor_id** | **str** | Unique ID of this WebTest. This is typically the same value as the Name field. | 
**timeout** | **int** | Seconds until this WebTest will timeout and fail. Default value is 30. | [optional] [default to 30]
**provisioning_state** | **str** | Current state of this component, whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_test_properties import WebTestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebTestProperties from a JSON string
web_test_properties_instance = WebTestProperties.from_json(json)
# print the JSON string representation of the object
print(WebTestProperties.to_json())

# convert the object into a dict
web_test_properties_dict = web_test_properties_instance.to_dict()
# create an instance of WebTestProperties from a dict
web_test_properties_from_dict = WebTestProperties.from_dict(web_test_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


