# AppUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_in_new_territories** | **bool** |  | [optional] 
**bundle_id** | **str** |  | [optional] 
**content_rights_declaration** | **str** |  | [optional] 
**primary_locale** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_update_request_data_attributes import AppUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppUpdateRequestDataAttributes from a JSON string
app_update_request_data_attributes_instance = AppUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppUpdateRequestDataAttributes.to_json())

# convert the object into a dict
app_update_request_data_attributes_dict = app_update_request_data_attributes_instance.to_dict()
# create an instance of AppUpdateRequestDataAttributes from a dict
app_update_request_data_attributes_from_dict = AppUpdateRequestDataAttributes.from_dict(app_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


