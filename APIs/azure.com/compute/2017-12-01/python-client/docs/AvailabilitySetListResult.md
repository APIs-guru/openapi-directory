# AvailabilitySetListResult

The List Availability Set operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of AvailabilitySets. Call ListNext() with this URI to fetch the next page of AvailabilitySets. | [optional] 
**value** | [**List[AvailabilitySet]**](AvailabilitySet.md) | The list of availability sets | 

## Example

```python
from openapi_client.models.availability_set_list_result import AvailabilitySetListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilitySetListResult from a JSON string
availability_set_list_result_instance = AvailabilitySetListResult.from_json(json)
# print the JSON string representation of the object
print(AvailabilitySetListResult.to_json())

# convert the object into a dict
availability_set_list_result_dict = availability_set_list_result_instance.to_dict()
# create an instance of AvailabilitySetListResult from a dict
availability_set_list_result_from_dict = AvailabilitySetListResult.from_dict(availability_set_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


