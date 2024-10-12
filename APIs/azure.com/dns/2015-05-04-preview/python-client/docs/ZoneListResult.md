# ZoneListResult

The response to a Zone List or ListAll operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the continuation token for the next page. | [optional] 
**value** | [**List[Zone]**](Zone.md) | Gets or sets information about the zones in the response. | [optional] 

## Example

```python
from openapi_client.models.zone_list_result import ZoneListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneListResult from a JSON string
zone_list_result_instance = ZoneListResult.from_json(json)
# print the JSON string representation of the object
print(ZoneListResult.to_json())

# convert the object into a dict
zone_list_result_dict = zone_list_result_instance.to_dict()
# create an instance of ZoneListResult from a dict
zone_list_result_from_dict = ZoneListResult.from_dict(zone_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


