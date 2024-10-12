# AvailabilityStatusListResult

The List availabilityStatus operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of availabilityStatuses. Call ListNext() with this URI to fetch the next page of availabilityStatuses. | [optional] 
**value** | [**List[AvailabilityStatus]**](AvailabilityStatus.md) | The list of availabilityStatuses. | 

## Example

```python
from openapi_client.models.availability_status_list_result import AvailabilityStatusListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityStatusListResult from a JSON string
availability_status_list_result_instance = AvailabilityStatusListResult.from_json(json)
# print the JSON string representation of the object
print(AvailabilityStatusListResult.to_json())

# convert the object into a dict
availability_status_list_result_dict = availability_status_list_result_instance.to_dict()
# create an instance of AvailabilityStatusListResult from a dict
availability_status_list_result_from_dict = AvailabilityStatusListResult.from_dict(availability_status_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


