# IntegrationDetails

Integration details of an entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters. | [optional] 
**integration_code** | **str** | An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters. | [optional] 

## Example

```python
from openapi_client.models.integration_details import IntegrationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationDetails from a JSON string
integration_details_instance = IntegrationDetails.from_json(json)
# print the JSON string representation of the object
print(IntegrationDetails.to_json())

# convert the object into a dict
integration_details_dict = integration_details_instance.to_dict()
# create an instance of IntegrationDetails from a dict
integration_details_from_dict = IntegrationDetails.from_dict(integration_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


