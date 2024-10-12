# UpdateExistingIntegrationRequestAnyOf2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broker** | [**AddNewIntegrationRequestAnyOf1Broker**](AddNewIntegrationRequestAnyOf1Broker.md) |  | 
**credentials** | [**AddNewIntegrationRequestAnyOfCredentials**](AddNewIntegrationRequestAnyOfCredentials.md) |  | 
**type** | **str** | integration type | 

## Example

```python
from openapi_client.models.update_existing_integration_request_any_of2 import UpdateExistingIntegrationRequestAnyOf2

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateExistingIntegrationRequestAnyOf2 from a JSON string
update_existing_integration_request_any_of2_instance = UpdateExistingIntegrationRequestAnyOf2.from_json(json)
# print the JSON string representation of the object
print(UpdateExistingIntegrationRequestAnyOf2.to_json())

# convert the object into a dict
update_existing_integration_request_any_of2_dict = update_existing_integration_request_any_of2_instance.to_dict()
# create an instance of UpdateExistingIntegrationRequestAnyOf2 from a dict
update_existing_integration_request_any_of2_from_dict = UpdateExistingIntegrationRequestAnyOf2.from_dict(update_existing_integration_request_any_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


