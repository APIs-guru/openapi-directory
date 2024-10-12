# RouteFilter

Route Filter Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**RouteFilterPropertiesFormat**](RouteFilterPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_filter import RouteFilter

# TODO update the JSON string below
json = "{}"
# create an instance of RouteFilter from a JSON string
route_filter_instance = RouteFilter.from_json(json)
# print the JSON string representation of the object
print(RouteFilter.to_json())

# convert the object into a dict
route_filter_dict = route_filter_instance.to_dict()
# create an instance of RouteFilter from a dict
route_filter_from_dict = RouteFilter.from_dict(route_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


