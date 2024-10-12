# UpdateConfigurationNavigation

Software update configuration Run Navigation model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the software update configuration triggered the software update configuration run | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_configuration_navigation import UpdateConfigurationNavigation

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConfigurationNavigation from a JSON string
update_configuration_navigation_instance = UpdateConfigurationNavigation.from_json(json)
# print the JSON string representation of the object
print(UpdateConfigurationNavigation.to_json())

# convert the object into a dict
update_configuration_navigation_dict = update_configuration_navigation_instance.to_dict()
# create an instance of UpdateConfigurationNavigation from a dict
update_configuration_navigation_from_dict = UpdateConfigurationNavigation.from_dict(update_configuration_navigation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


