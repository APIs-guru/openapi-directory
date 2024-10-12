# AdminOverview

Admin overview resource object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AdminOverviewProperties**](AdminOverviewProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Region location of resource. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.admin_overview import AdminOverview

# TODO update the JSON string below
json = "{}"
# create an instance of AdminOverview from a JSON string
admin_overview_instance = AdminOverview.from_json(json)
# print the JSON string representation of the object
print(AdminOverview.to_json())

# convert the object into a dict
admin_overview_dict = admin_overview_instance.to_dict()
# create an instance of AdminOverview from a dict
admin_overview_from_dict = AdminOverview.from_dict(admin_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


