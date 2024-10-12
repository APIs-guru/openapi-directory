# BackendUpdateRequestProperties

Parameters supplied to the Update Backend operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **str** | Backend communication protocol. | [optional] 
**url** | **str** | Runtime Url of the Backend. | [optional] 

## Example

```python
from openapi_client.models.backend_update_request_properties import BackendUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackendUpdateRequestProperties from a JSON string
backend_update_request_properties_instance = BackendUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(BackendUpdateRequestProperties.to_json())

# convert the object into a dict
backend_update_request_properties_dict = backend_update_request_properties_instance.to_dict()
# create an instance of BackendUpdateRequestProperties from a dict
backend_update_request_properties_from_dict = BackendUpdateRequestProperties.from_dict(backend_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


