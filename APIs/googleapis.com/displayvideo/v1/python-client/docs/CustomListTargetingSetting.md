# CustomListTargetingSetting

Details of custom list targeting setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_list_id** | **str** | Required. Custom id of custom list targeting setting. This id is custom_list_id. | [optional] 

## Example

```python
from openapi_client.models.custom_list_targeting_setting import CustomListTargetingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of CustomListTargetingSetting from a JSON string
custom_list_targeting_setting_instance = CustomListTargetingSetting.from_json(json)
# print the JSON string representation of the object
print(CustomListTargetingSetting.to_json())

# convert the object into a dict
custom_list_targeting_setting_dict = custom_list_targeting_setting_instance.to_dict()
# create an instance of CustomListTargetingSetting from a dict
custom_list_targeting_setting_from_dict = CustomListTargetingSetting.from_dict(custom_list_targeting_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


