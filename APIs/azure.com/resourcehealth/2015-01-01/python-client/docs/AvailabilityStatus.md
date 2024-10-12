# AvailabilityStatus

availabilityStatus of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure Resource Manager Identity for the availabilityStatuses resource. | [optional] 
**location** | **str** | Azure Resource Manager geo location of the resource. | [optional] 
**name** | **str** | current. | [optional] 
**properties** | [**AvailabilityStatusProperties**](AvailabilityStatusProperties.md) |  | [optional] 
**type** | **str** | Microsoft.ResourceHealth/AvailabilityStatuses. | [optional] 

## Example

```python
from openapi_client.models.availability_status import AvailabilityStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityStatus from a JSON string
availability_status_instance = AvailabilityStatus.from_json(json)
# print the JSON string representation of the object
print(AvailabilityStatus.to_json())

# convert the object into a dict
availability_status_dict = availability_status_instance.to_dict()
# create an instance of AvailabilityStatus from a dict
availability_status_from_dict = AvailabilityStatus.from_dict(availability_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


