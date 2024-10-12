# AppInfoUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**relationships** | [**AppInfoUpdateRequestDataRelationships**](AppInfoUpdateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_info_update_request_data import AppInfoUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoUpdateRequestData from a JSON string
app_info_update_request_data_instance = AppInfoUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppInfoUpdateRequestData.to_json())

# convert the object into a dict
app_info_update_request_data_dict = app_info_update_request_data_instance.to_dict()
# create an instance of AppInfoUpdateRequestData from a dict
app_info_update_request_data_from_dict = AppInfoUpdateRequestData.from_dict(app_info_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


