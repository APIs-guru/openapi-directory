# UpdateExistingIntegrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broker** | [**AddNewIntegrationRequestAnyOf1Broker**](AddNewIntegrationRequestAnyOf1Broker.md) |  | 
**type** | **str** | integration type | 
**credentials** | [**AddNewIntegrationRequestAnyOfCredentials**](AddNewIntegrationRequestAnyOfCredentials.md) |  | 

## Example

```python
from openapi_client.models.update_existing_integration_request import UpdateExistingIntegrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateExistingIntegrationRequest from a JSON string
update_existing_integration_request_instance = UpdateExistingIntegrationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateExistingIntegrationRequest.to_json())

# convert the object into a dict
update_existing_integration_request_dict = update_existing_integration_request_instance.to_dict()
# create an instance of UpdateExistingIntegrationRequest from a dict
update_existing_integration_request_from_dict = UpdateExistingIntegrationRequest.from_dict(update_existing_integration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


