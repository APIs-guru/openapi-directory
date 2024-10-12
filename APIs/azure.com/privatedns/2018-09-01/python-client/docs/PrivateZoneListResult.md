# PrivateZoneListResult

The response to a Private DNS zone list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token for the next page of results. | [optional] [readonly] 
**value** | [**List[PrivateZone]**](PrivateZone.md) | Information about the Private DNS zones. | [optional] 

## Example

```python
from openapi_client.models.private_zone_list_result import PrivateZoneListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateZoneListResult from a JSON string
private_zone_list_result_instance = PrivateZoneListResult.from_json(json)
# print the JSON string representation of the object
print(PrivateZoneListResult.to_json())

# convert the object into a dict
private_zone_list_result_dict = private_zone_list_result_instance.to_dict()
# create an instance of PrivateZoneListResult from a dict
private_zone_list_result_from_dict = PrivateZoneListResult.from_dict(private_zone_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


