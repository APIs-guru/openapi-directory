# CompositeFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**logic_operator** | **str** | The logic operator of the sub filter. | [optional] 
**sub_filters** | [**List[Filter]**](Filter.md) | Sub filters. | [optional] 

## Example

```python
from openapi_client.models.composite_filter import CompositeFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeFilter from a JSON string
composite_filter_instance = CompositeFilter.from_json(json)
# print the JSON string representation of the object
print(CompositeFilter.to_json())

# convert the object into a dict
composite_filter_dict = composite_filter_instance.to_dict()
# create an instance of CompositeFilter from a dict
composite_filter_from_dict = CompositeFilter.from_dict(composite_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


