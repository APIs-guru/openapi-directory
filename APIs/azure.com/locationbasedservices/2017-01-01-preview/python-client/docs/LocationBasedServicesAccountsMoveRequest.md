# LocationBasedServicesAccountsMoveRequest

The description of what resources to move between resource groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_ids** | **List[str]** | A list of resource names to move from the source resource group. | 
**target_resource_group** | **str** | The name of the destination resource group. | 

## Example

```python
from openapi_client.models.location_based_services_accounts_move_request import LocationBasedServicesAccountsMoveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LocationBasedServicesAccountsMoveRequest from a JSON string
location_based_services_accounts_move_request_instance = LocationBasedServicesAccountsMoveRequest.from_json(json)
# print the JSON string representation of the object
print(LocationBasedServicesAccountsMoveRequest.to_json())

# convert the object into a dict
location_based_services_accounts_move_request_dict = location_based_services_accounts_move_request_instance.to_dict()
# create an instance of LocationBasedServicesAccountsMoveRequest from a dict
location_based_services_accounts_move_request_from_dict = LocationBasedServicesAccountsMoveRequest.from_dict(location_based_services_accounts_move_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


