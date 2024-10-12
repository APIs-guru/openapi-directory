# AddNewIntegrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**AddNewIntegrationRequestAnyOfCredentials**](AddNewIntegrationRequestAnyOfCredentials.md) |  | 
**type** | **str** | integration type | 
**broker** | [**AddNewIntegrationRequestAnyOf1Broker**](AddNewIntegrationRequestAnyOf1Broker.md) |  | 

## Example

```python
from openapi_client.models.add_new_integration_request import AddNewIntegrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddNewIntegrationRequest from a JSON string
add_new_integration_request_instance = AddNewIntegrationRequest.from_json(json)
# print the JSON string representation of the object
print(AddNewIntegrationRequest.to_json())

# convert the object into a dict
add_new_integration_request_dict = add_new_integration_request_instance.to_dict()
# create an instance of AddNewIntegrationRequest from a dict
add_new_integration_request_from_dict = AddNewIntegrationRequest.from_dict(add_new_integration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


