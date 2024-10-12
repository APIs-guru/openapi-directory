# UpdateExistingIntegrationRequestAnyOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broker** | [**AddNewIntegrationRequestAnyOf1Broker**](AddNewIntegrationRequestAnyOf1Broker.md) |  | 
**type** | **str** | integration type | 

## Example

```python
from openapi_client.models.update_existing_integration_request_any_of import UpdateExistingIntegrationRequestAnyOf

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateExistingIntegrationRequestAnyOf from a JSON string
update_existing_integration_request_any_of_instance = UpdateExistingIntegrationRequestAnyOf.from_json(json)
# print the JSON string representation of the object
print(UpdateExistingIntegrationRequestAnyOf.to_json())

# convert the object into a dict
update_existing_integration_request_any_of_dict = update_existing_integration_request_any_of_instance.to_dict()
# create an instance of UpdateExistingIntegrationRequestAnyOf from a dict
update_existing_integration_request_any_of_from_dict = UpdateExistingIntegrationRequestAnyOf.from_dict(update_existing_integration_request_any_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


