# ApiCreateOrUpdateRequestPropertiesWsdlSelector

Criteria to limit import of WSDL to a subset of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wsdl_endpoint_name** | **str** | Name of endpoint(port) to import from WSDL | [optional] 
**wsdl_service_name** | **str** | Name of service to import from WSDL | [optional] 

## Example

```python
from openapi_client.models.api_create_or_update_request_properties_wsdl_selector import ApiCreateOrUpdateRequestPropertiesWsdlSelector

# TODO update the JSON string below
json = "{}"
# create an instance of ApiCreateOrUpdateRequestPropertiesWsdlSelector from a JSON string
api_create_or_update_request_properties_wsdl_selector_instance = ApiCreateOrUpdateRequestPropertiesWsdlSelector.from_json(json)
# print the JSON string representation of the object
print(ApiCreateOrUpdateRequestPropertiesWsdlSelector.to_json())

# convert the object into a dict
api_create_or_update_request_properties_wsdl_selector_dict = api_create_or_update_request_properties_wsdl_selector_instance.to_dict()
# create an instance of ApiCreateOrUpdateRequestPropertiesWsdlSelector from a dict
api_create_or_update_request_properties_wsdl_selector_from_dict = ApiCreateOrUpdateRequestPropertiesWsdlSelector.from_dict(api_create_or_update_request_properties_wsdl_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


