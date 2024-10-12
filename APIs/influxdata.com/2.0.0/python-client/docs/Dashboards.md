# Dashboards


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dashboards** | [**List[Dashboard]**](Dashboard.md) |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 

## Example

```python
from openapi_client.models.dashboards import Dashboards

# TODO update the JSON string below
json = "{}"
# create an instance of Dashboards from a JSON string
dashboards_instance = Dashboards.from_json(json)
# print the JSON string representation of the object
print(Dashboards.to_json())

# convert the object into a dict
dashboards_dict = dashboards_instance.to_dict()
# create an instance of Dashboards from a dict
dashboards_from_dict = Dashboards.from_dict(dashboards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


