# ZoneInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **List[str]** |  | [optional] 
**in_bundles** | **List[str]** |  | [optional] 
**includes** | **List[str]** |  | [optional] 
**type** | **str** | TLD type | 
**zone** | **str** | TLD name | 

## Example

```python
from openapi_client.models.zone_info import ZoneInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ZoneInfo from a JSON string
zone_info_instance = ZoneInfo.from_json(json)
# print the JSON string representation of the object
print(ZoneInfo.to_json())

# convert the object into a dict
zone_info_dict = zone_info_instance.to_dict()
# create an instance of ZoneInfo from a dict
zone_info_from_dict = ZoneInfo.from_dict(zone_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


