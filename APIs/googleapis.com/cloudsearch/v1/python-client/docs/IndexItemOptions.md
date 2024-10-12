# IndexItemOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_unknown_gsuite_principals** | **bool** | Specifies if the index request should allow Google Workspace principals that do not exist or are deleted. | [optional] 

## Example

```python
from openapi_client.models.index_item_options import IndexItemOptions

# TODO update the JSON string below
json = "{}"
# create an instance of IndexItemOptions from a JSON string
index_item_options_instance = IndexItemOptions.from_json(json)
# print the JSON string representation of the object
print(IndexItemOptions.to_json())

# convert the object into a dict
index_item_options_dict = index_item_options_instance.to_dict()
# create an instance of IndexItemOptions from a dict
index_item_options_from_dict = IndexItemOptions.from_dict(index_item_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


