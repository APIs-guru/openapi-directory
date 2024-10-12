# ManageItemSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**short_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.manage_item_summary import ManageItemSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ManageItemSummary from a JSON string
manage_item_summary_instance = ManageItemSummary.from_json(json)
# print the JSON string representation of the object
print(ManageItemSummary.to_json())

# convert the object into a dict
manage_item_summary_dict = manage_item_summary_instance.to_dict()
# create an instance of ManageItemSummary from a dict
manage_item_summary_from_dict = ManageItemSummary.from_dict(manage_item_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


