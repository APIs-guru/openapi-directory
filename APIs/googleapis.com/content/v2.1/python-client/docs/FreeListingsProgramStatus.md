# FreeListingsProgramStatus

Response message for GetFreeListingsProgramStatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_state** | **str** | State of the program. &#x60;ENABLED&#x60; if there are offers for at least one region. | [optional] 
**region_statuses** | [**List[FreeListingsProgramStatusRegionStatus]**](FreeListingsProgramStatusRegionStatus.md) | Status of the program in each region. Regions with the same status and review eligibility are grouped together in &#x60;regionCodes&#x60;. | [optional] 

## Example

```python
from openapi_client.models.free_listings_program_status import FreeListingsProgramStatus

# TODO update the JSON string below
json = "{}"
# create an instance of FreeListingsProgramStatus from a JSON string
free_listings_program_status_instance = FreeListingsProgramStatus.from_json(json)
# print the JSON string representation of the object
print(FreeListingsProgramStatus.to_json())

# convert the object into a dict
free_listings_program_status_dict = free_listings_program_status_instance.to_dict()
# create an instance of FreeListingsProgramStatus from a dict
free_listings_program_status_from_dict = FreeListingsProgramStatus.from_dict(free_listings_program_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


