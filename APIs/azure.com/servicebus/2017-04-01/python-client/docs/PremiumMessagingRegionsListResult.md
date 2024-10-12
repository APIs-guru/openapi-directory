# PremiumMessagingRegionsListResult

The response of the List PremiumMessagingRegions operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. Not empty if Value contains incomplete list of PremiumMessagingRegions. | [optional] [readonly] 
**value** | [**List[PremiumMessagingRegions]**](PremiumMessagingRegions.md) | Result of the List PremiumMessagingRegions type. | [optional] 

## Example

```python
from openapi_client.models.premium_messaging_regions_list_result import PremiumMessagingRegionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PremiumMessagingRegionsListResult from a JSON string
premium_messaging_regions_list_result_instance = PremiumMessagingRegionsListResult.from_json(json)
# print the JSON string representation of the object
print(PremiumMessagingRegionsListResult.to_json())

# convert the object into a dict
premium_messaging_regions_list_result_dict = premium_messaging_regions_list_result_instance.to_dict()
# create an instance of PremiumMessagingRegionsListResult from a dict
premium_messaging_regions_list_result_from_dict = PremiumMessagingRegionsListResult.from_dict(premium_messaging_regions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


