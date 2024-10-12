# DashboardParts

A dashboard part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, object]** | The dashboard part&#39;s metadata. | [optional] 
**position** | [**DashboardPartsPosition**](DashboardPartsPosition.md) |  | 

## Example

```python
from openapi_client.models.dashboard_parts import DashboardParts

# TODO update the JSON string below
json = "{}"
# create an instance of DashboardParts from a JSON string
dashboard_parts_instance = DashboardParts.from_json(json)
# print the JSON string representation of the object
print(DashboardParts.to_json())

# convert the object into a dict
dashboard_parts_dict = dashboard_parts_instance.to_dict()
# create an instance of DashboardParts from a dict
dashboard_parts_from_dict = DashboardParts.from_dict(dashboard_parts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


