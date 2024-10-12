# FilterRef

JSON template for a profile filter link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this filter belongs. | [optional] [readonly] 
**href** | **str** | Link for this filter. | [optional] 
**id** | **str** | Filter ID. | [optional] 
**kind** | **str** | Kind value for filter reference. | [optional] [default to 'analytics#filterRef']
**name** | **str** | Name of this filter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.filter_ref import FilterRef

# TODO update the JSON string below
json = "{}"
# create an instance of FilterRef from a JSON string
filter_ref_instance = FilterRef.from_json(json)
# print the JSON string representation of the object
print(FilterRef.to_json())

# convert the object into a dict
filter_ref_dict = filter_ref_instance.to_dict()
# create an instance of FilterRef from a dict
filter_ref_from_dict = FilterRef.from_dict(filter_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


