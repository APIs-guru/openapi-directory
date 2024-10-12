# Options

Additional query options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_only_targeted_user_lists** | **bool** | Set to true and filter your report by &#x60;FILTER_INSERTION_ORDER&#x60; or &#x60;FILTER_LINE_ITEM&#x60; to include data for audience lists specifically targeted by those items. | [optional] 
**path_query_options** | [**PathQueryOptions**](PathQueryOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.options import Options

# TODO update the JSON string below
json = "{}"
# create an instance of Options from a JSON string
options_instance = Options.from_json(json)
# print the JSON string representation of the object
print(Options.to_json())

# convert the object into a dict
options_dict = options_instance.to_dict()
# create an instance of Options from a dict
options_from_dict = Options.from_dict(options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


