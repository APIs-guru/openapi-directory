# NestedSite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_site import NestedSite

# TODO update the JSON string below
json = "{}"
# create an instance of NestedSite from a JSON string
nested_site_instance = NestedSite.from_json(json)
# print the JSON string representation of the object
print(NestedSite.to_json())

# convert the object into a dict
nested_site_dict = nested_site_instance.to_dict()
# create an instance of NestedSite from a dict
nested_site_from_dict = NestedSite.from_dict(nested_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


