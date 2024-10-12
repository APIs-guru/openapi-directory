# Visit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_pageview_id** | **str** |  | 
**pageview_id** | **str** |  | 
**visit_id** | **str** |  | 
**visitor_id** | **str** |  | 

## Example

```python
from openapi_client.models.visit import Visit

# TODO update the JSON string below
json = "{}"
# create an instance of Visit from a JSON string
visit_instance = Visit.from_json(json)
# print the JSON string representation of the object
print(Visit.to_json())

# convert the object into a dict
visit_dict = visit_instance.to_dict()
# create an instance of Visit from a dict
visit_from_dict = Visit.from_dict(visit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


