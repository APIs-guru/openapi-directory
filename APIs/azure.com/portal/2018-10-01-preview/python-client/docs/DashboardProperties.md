# DashboardProperties

The shared dashboard properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lenses** | [**Dict[str, DashboardLens]**](DashboardLens.md) | The dashboard lenses. | [optional] 
**metadata** | **Dict[str, object]** | The dashboard metadata. | [optional] 

## Example

```python
from openapi_client.models.dashboard_properties import DashboardProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardProperties from a JSON string
dashboard_properties_instance = DashboardProperties.from_json(json)
# print the JSON string representation of the object
print(DashboardProperties.to_json())

# convert the object into a dict
dashboard_properties_dict = dashboard_properties_instance.to_dict()
# create an instance of DashboardProperties from a dict
dashboard_properties_from_dict = DashboardProperties.from_dict(dashboard_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


