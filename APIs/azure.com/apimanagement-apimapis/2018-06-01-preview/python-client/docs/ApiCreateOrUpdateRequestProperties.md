# ApiCreateOrUpdateRequestProperties

Api Create or Update Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_type** | **str** | Type of Api to create.   * &#x60;http&#x60; creates a SOAP to REST API   * &#x60;soap&#x60; creates a SOAP pass-through API . | [optional] 
**content_format** | **str** | Format of the Content in which the API is getting imported. | [optional] 
**content_value** | **str** | Content value when Importing an API. | [optional] 
**wsdl_selector** | [**ApiCreateOrUpdateRequestPropertiesWsdlSelector**](ApiCreateOrUpdateRequestPropertiesWsdlSelector.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_create_or_update_request_properties import ApiCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiCreateOrUpdateRequestProperties from a JSON string
api_create_or_update_request_properties_instance = ApiCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(ApiCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
api_create_or_update_request_properties_dict = api_create_or_update_request_properties_instance.to_dict()
# create an instance of ApiCreateOrUpdateRequestProperties from a dict
api_create_or_update_request_properties_from_dict = ApiCreateOrUpdateRequestProperties.from_dict(api_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


