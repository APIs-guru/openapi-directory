# ApplicationGatewayHeaderConfiguration

Header configuration of the Actions set in Application Gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_name** | **str** | Header name of the header configuration. | [optional] 
**header_value** | **str** | Header value of the header configuration. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_header_configuration import ApplicationGatewayHeaderConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayHeaderConfiguration from a JSON string
application_gateway_header_configuration_instance = ApplicationGatewayHeaderConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayHeaderConfiguration.to_json())

# convert the object into a dict
application_gateway_header_configuration_dict = application_gateway_header_configuration_instance.to_dict()
# create an instance of ApplicationGatewayHeaderConfiguration from a dict
application_gateway_header_configuration_from_dict = ApplicationGatewayHeaderConfiguration.from_dict(application_gateway_header_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


