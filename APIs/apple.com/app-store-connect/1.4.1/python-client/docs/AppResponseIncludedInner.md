# AppResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PerfPowerMetricAttributes**](PerfPowerMetricAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**GameCenterEnabledVersionRelationships**](GameCenterEnabledVersionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_response_included_inner import AppResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppResponseIncludedInner from a JSON string
app_response_included_inner_instance = AppResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(AppResponseIncludedInner.to_json())

# convert the object into a dict
app_response_included_inner_dict = app_response_included_inner_instance.to_dict()
# create an instance of AppResponseIncludedInner from a dict
app_response_included_inner_from_dict = AppResponseIncludedInner.from_dict(app_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


