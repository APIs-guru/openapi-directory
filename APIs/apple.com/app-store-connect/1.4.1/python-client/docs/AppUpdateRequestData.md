# AppUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppUpdateRequestDataAttributes**](AppUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**AppUpdateRequestDataRelationships**](AppUpdateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_update_request_data import AppUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppUpdateRequestData from a JSON string
app_update_request_data_instance = AppUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppUpdateRequestData.to_json())

# convert the object into a dict
app_update_request_data_dict = app_update_request_data_instance.to_dict()
# create an instance of AppUpdateRequestData from a dict
app_update_request_data_from_dict = AppUpdateRequestData.from_dict(app_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


