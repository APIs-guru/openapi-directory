# ObjectFilter

Object Filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#objectFilter\&quot;. | [optional] 
**object_ids** | **List[str]** | Applicable when status is ASSIGNED. The user has access to objects with these object IDs. | [optional] 
**status** | **str** | Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list. | [optional] 

## Example

```python
from openapi_client.models.object_filter import ObjectFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectFilter from a JSON string
object_filter_instance = ObjectFilter.from_json(json)
# print the JSON string representation of the object
print(ObjectFilter.to_json())

# convert the object into a dict
object_filter_dict = object_filter_instance.to_dict()
# create an instance of ObjectFilter from a dict
object_filter_from_dict = ObjectFilter.from_dict(object_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


