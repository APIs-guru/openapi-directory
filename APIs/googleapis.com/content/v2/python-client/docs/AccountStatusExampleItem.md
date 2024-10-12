# AccountStatusExampleItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**submitted_value** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**value_on_landing_page** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_status_example_item import AccountStatusExampleItem

# TODO update the JSON string below
json = "{}"
# create an instance of AccountStatusExampleItem from a JSON string
account_status_example_item_instance = AccountStatusExampleItem.from_json(json)
# print the JSON string representation of the object
print(AccountStatusExampleItem.to_json())

# convert the object into a dict
account_status_example_item_dict = account_status_example_item_instance.to_dict()
# create an instance of AccountStatusExampleItem from a dict
account_status_example_item_from_dict = AccountStatusExampleItem.from_dict(account_status_example_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


