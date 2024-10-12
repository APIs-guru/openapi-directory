# DashboardLens

A dashboard lens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, object]** | The dashboard len&#39;s metadata. | [optional] 
**order** | **int** | The lens order. | 
**parts** | [**Dict[str, DashboardParts]**](DashboardParts.md) | The dashboard parts. | 

## Example

```python
from openapi_client.models.dashboard_lens import DashboardLens

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardLens from a JSON string
dashboard_lens_instance = DashboardLens.from_json(json)
# print the JSON string representation of the object
print(DashboardLens.to_json())

# convert the object into a dict
dashboard_lens_dict = dashboard_lens_instance.to_dict()
# create an instance of DashboardLens from a dict
dashboard_lens_from_dict = DashboardLens.from_dict(dashboard_lens_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


