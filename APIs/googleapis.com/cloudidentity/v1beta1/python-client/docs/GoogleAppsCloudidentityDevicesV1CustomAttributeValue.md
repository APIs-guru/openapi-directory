# GoogleAppsCloudidentityDevicesV1CustomAttributeValue

Additional custom attribute values may be one of these types

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Represents a boolean value. | [optional] 
**number_value** | **float** | Represents a double value. | [optional] 
**string_value** | **str** | Represents a string value. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_custom_attribute_value import GoogleAppsCloudidentityDevicesV1CustomAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1CustomAttributeValue from a JSON string
google_apps_cloudidentity_devices_v1_custom_attribute_value_instance = GoogleAppsCloudidentityDevicesV1CustomAttributeValue.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1CustomAttributeValue.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_custom_attribute_value_dict = google_apps_cloudidentity_devices_v1_custom_attribute_value_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1CustomAttributeValue from a dict
google_apps_cloudidentity_devices_v1_custom_attribute_value_from_dict = GoogleAppsCloudidentityDevicesV1CustomAttributeValue.from_dict(google_apps_cloudidentity_devices_v1_custom_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


