# ApplicationGatewayCustomError

Customer error of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_error_page_url** | **str** | Error page URL of the application gateway customer error. | [optional] 
**status_code** | **str** | Status code of the application gateway customer error. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_custom_error import ApplicationGatewayCustomError

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayCustomError from a JSON string
application_gateway_custom_error_instance = ApplicationGatewayCustomError.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayCustomError.to_json())

# convert the object into a dict
application_gateway_custom_error_dict = application_gateway_custom_error_instance.to_dict()
# create an instance of ApplicationGatewayCustomError from a dict
application_gateway_custom_error_from_dict = ApplicationGatewayCustomError.from_dict(application_gateway_custom_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


