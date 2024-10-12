# SingleFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** |  | [optional] 
**filter_type** | **str** |  | [optional] 
**included_fields** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.single_filter import SingleFilter

# TODO update the JSON string below
json = "{}"
# create an instance of SingleFilter from a JSON string
single_filter_instance = SingleFilter.from_json(json)
# print the JSON string representation of the object
print(SingleFilter.to_json())

# convert the object into a dict
single_filter_dict = single_filter_instance.to_dict()
# create an instance of SingleFilter from a dict
single_filter_from_dict = SingleFilter.from_dict(single_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


