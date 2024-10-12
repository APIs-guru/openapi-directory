# NewRegisteredUsersItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**granularity** | **str** |  | [optional] 
**project** | **str** |  | [optional] 
**results** | [**List[NewRegisteredUsersItemsInnerResultsInner]**](NewRegisteredUsersItemsInnerResultsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.new_registered_users_items_inner import NewRegisteredUsersItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of NewRegisteredUsersItemsInner from a JSON string
new_registered_users_items_inner_instance = NewRegisteredUsersItemsInner.from_json(json)
# print the JSON string representation of the object
print(NewRegisteredUsersItemsInner.to_json())

# convert the object into a dict
new_registered_users_items_inner_dict = new_registered_users_items_inner_instance.to_dict()
# create an instance of NewRegisteredUsersItemsInner from a dict
new_registered_users_items_inner_from_dict = NewRegisteredUsersItemsInner.from_dict(new_registered_users_items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


