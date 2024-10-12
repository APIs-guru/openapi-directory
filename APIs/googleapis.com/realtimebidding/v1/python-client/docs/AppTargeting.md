# AppTargeting

A subset of app inventory to target. Bid requests that match criteria in at least one of the specified dimensions will be sent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mobile_app_category_targeting** | [**NumericTargetingDimension**](NumericTargetingDimension.md) |  | [optional] 
**mobile_app_targeting** | [**StringTargetingDimension**](StringTargetingDimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_targeting import AppTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of AppTargeting from a JSON string
app_targeting_instance = AppTargeting.from_json(json)
# print the JSON string representation of the object
print(AppTargeting.to_json())

# convert the object into a dict
app_targeting_dict = app_targeting_instance.to_dict()
# create an instance of AppTargeting from a dict
app_targeting_from_dict = AppTargeting.from_dict(app_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


