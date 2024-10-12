# BackendListByService200ResponseValueInnerProperties

Parameters supplied to the Create Backend operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **str** | Backend communication protocol. | 
**url** | **str** | Runtime Url of the Backend. | 

## Example

```python
from openapi_client.models.backend_list_by_service200_response_value_inner_properties import BackendListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackendListByService200ResponseValueInnerProperties from a JSON string
backend_list_by_service200_response_value_inner_properties_instance = BackendListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(BackendListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
backend_list_by_service200_response_value_inner_properties_dict = backend_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of BackendListByService200ResponseValueInnerProperties from a dict
backend_list_by_service200_response_value_inner_properties_from_dict = BackendListByService200ResponseValueInnerProperties.from_dict(backend_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


