# Views


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**StackEventsInnerResourcesInnerLinks**](StackEventsInnerResourcesInnerLinks.md) |  | [optional] 
**views** | [**List[View]**](View.md) |  | [optional] 

## Example

```python
from openapi_client.models.views import Views

# TODO update the JSON string below
json = "{}"
# create an instance of Views from a JSON string
views_instance = Views.from_json(json)
# print the JSON string representation of the object
print(Views.to_json())

# convert the object into a dict
views_dict = views_instance.to_dict()
# create an instance of Views from a dict
views_from_dict = Views.from_dict(views_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


