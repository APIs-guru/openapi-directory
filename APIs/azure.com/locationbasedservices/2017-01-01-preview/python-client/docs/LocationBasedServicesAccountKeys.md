# LocationBasedServicesAccountKeys

The set of keys which can be used to access the Location Based Services REST APIs. Two keys are provided for key rotation without interruption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The full Azure resource identifier of the Location Based Services Account. | [optional] [readonly] 
**primary_key** | **str** | The primary key for accessing the Location Based Services REST APIs. | [optional] [readonly] 
**secondary_key** | **str** | The secondary key for accessing the Location Based Services REST APIs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.location_based_services_account_keys import LocationBasedServicesAccountKeys

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesAccountKeys from a JSON string
location_based_services_account_keys_instance = LocationBasedServicesAccountKeys.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesAccountKeys.to_json())

# convert the object into a dict
location_based_services_account_keys_dict = location_based_services_account_keys_instance.to_dict()
# create an instance of LocationBasedServicesAccountKeys from a dict
location_based_services_account_keys_from_dict = LocationBasedServicesAccountKeys.from_dict(location_based_services_account_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


