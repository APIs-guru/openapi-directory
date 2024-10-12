# KeyRangeInfos

A message representing a list of specific information for multiple key ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**infos** | [**List[KeyRangeInfo]**](KeyRangeInfo.md) | The list individual KeyRangeInfos. | [optional] 
**total_size** | **int** | The total size of the list of all KeyRangeInfos. This may be larger than the number of repeated messages above. If that is the case, this number may be used to determine how many are not being shown. | [optional] 

## Example

```python
from openapi_client.models.key_range_infos import KeyRangeInfos

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRangeInfos from a JSON string
key_range_infos_instance = KeyRangeInfos.from_json(json)
# print the JSON string representation of the object
print(KeyRangeInfos.to_json())

# convert the object into a dict
key_range_infos_dict = key_range_infos_instance.to_dict()
# create an instance of KeyRangeInfos from a dict
key_range_infos_from_dict = KeyRangeInfos.from_dict(key_range_infos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


