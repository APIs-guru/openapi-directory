# CustomImagePropertiesFromPlan

Properties for plan on a custom image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the plan, equivalent to name of the plan | [optional] 
**offer** | **str** | The offer for the plan from the marketplace image the custom image is derived from | [optional] 
**publisher** | **str** | The publisher for the plan from the marketplace image the custom image is derived from | [optional] 

## Example

```python
from openapi_client.models.custom_image_properties_from_plan import CustomImagePropertiesFromPlan

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImagePropertiesFromPlan from a JSON string
custom_image_properties_from_plan_instance = CustomImagePropertiesFromPlan.from_json(json)
# print the JSON string representation of the object
print(CustomImagePropertiesFromPlan.to_json())

# convert the object into a dict
custom_image_properties_from_plan_dict = custom_image_properties_from_plan_instance.to_dict()
# create an instance of CustomImagePropertiesFromPlan from a dict
custom_image_properties_from_plan_from_dict = CustomImagePropertiesFromPlan.from_dict(custom_image_properties_from_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


