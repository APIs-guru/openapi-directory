# CapacityPoolList

List of capacity pool resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CapacityPool]**](CapacityPool.md) | List of Capacity pools | [optional] 

## Example

```python
from openapi_client.models.capacity_pool_list import CapacityPoolList

# TODO update the JSON string below
json = "{}"
# create an instance of CapacityPoolList from a JSON string
capacity_pool_list_instance = CapacityPoolList.from_json(json)
# print the JSON string representation of the object
print(CapacityPoolList.to_json())

# convert the object into a dict
capacity_pool_list_dict = capacity_pool_list_instance.to_dict()
# create an instance of CapacityPoolList from a dict
capacity_pool_list_from_dict = CapacityPoolList.from_dict(capacity_pool_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


