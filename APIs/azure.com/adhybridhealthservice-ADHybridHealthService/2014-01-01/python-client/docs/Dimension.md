# Dimension

The connector object error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_alerts** | **int** | The count of alerts that are currently active for the service. | [optional] 
**additional_information** | **str** | The additional information related to the service. | [optional] 
**display_name** | **str** | The display name of the service. | [optional] 
**health** | **str** | The health status for the domain controller. | [optional] 
**last_updated** | **datetime** | The date or time , in UTC, when the service properties were last updated. | [optional] 
**resolved_alerts** | **int** | The total count of alerts that has been resolved for the service. | [optional] 
**signature** | **str** | The signature of the service. | [optional] 
**simple_properties** | **object** | List of service specific configuration properties. | [optional] 
**type** | **str** | The service type for the services onboarded to Azure Active Directory Connect Health. Depending on whether the service is monitoring, ADFS, Sync or ADDS roles, the service type can either be AdFederationService or AadSyncService or AdDomainService. | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


