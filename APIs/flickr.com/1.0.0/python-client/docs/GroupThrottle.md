# GroupThrottle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**mode** | **str** |  | [optional] 
**remaining** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.group_throttle import GroupThrottle

# TODO update the JSON string below
json = "{}"
# create an instance of GroupThrottle from a JSON string
group_throttle_instance = GroupThrottle.from_json(json)
# print the JSON string representation of the object
print(GroupThrottle.to_json())

# convert the object into a dict
group_throttle_dict = group_throttle_instance.to_dict()
# create an instance of GroupThrottle from a dict
group_throttle_from_dict = GroupThrottle.from_dict(group_throttle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


