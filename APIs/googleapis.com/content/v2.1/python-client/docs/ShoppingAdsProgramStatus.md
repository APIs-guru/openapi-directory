# ShoppingAdsProgramStatus

Response message for GetShoppingAdsProgramStatus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**global_state** | **str** | State of the program. &#x60;ENABLED&#x60; if there are offers for at least one region. | [optional] 
**region_statuses** | [**List[ShoppingAdsProgramStatusRegionStatus]**](ShoppingAdsProgramStatusRegionStatus.md) | Status of the program in each region. Regions with the same status and review eligibility are grouped together in &#x60;regionCodes&#x60;. | [optional] 

## Example

```python
from openapi_client.models.shopping_ads_program_status import ShoppingAdsProgramStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ShoppingAdsProgramStatus from a JSON string
shopping_ads_program_status_instance = ShoppingAdsProgramStatus.from_json(json)
# print the JSON string representation of the object
print(ShoppingAdsProgramStatus.to_json())

# convert the object into a dict
shopping_ads_program_status_dict = shopping_ads_program_status_instance.to_dict()
# create an instance of ShoppingAdsProgramStatus from a dict
shopping_ads_program_status_from_dict = ShoppingAdsProgramStatus.from_dict(shopping_ads_program_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


