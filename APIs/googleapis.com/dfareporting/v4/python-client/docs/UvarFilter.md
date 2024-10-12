# UvarFilter

Defines the filtering on a single uvar.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complement** | **bool** | Return rows which don&#39;t match this filter. | [optional] 
**index** | **str** | Custom variable index the filter is applied to. | [optional] 
**kind** | **str** | The kind of resource this is, in this case dfareporting#uvarFilter. | [optional] 
**match** | **str** | Indicates how the filter should be matched to the values. | [optional] 
**values** | **List[str]** | Values to filter on. | [optional] 

## Example

```python
from openapi_client.models.uvar_filter import UvarFilter

# TODO update the JSON string below
json = "{}"
# create an instance of UvarFilter from a JSON string
uvar_filter_instance = UvarFilter.from_json(json)
# print the JSON string representation of the object
print(UvarFilter.to_json())

# convert the object into a dict
uvar_filter_dict = uvar_filter_instance.to_dict()
# create an instance of UvarFilter from a dict
uvar_filter_from_dict = UvarFilter.from_dict(uvar_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


