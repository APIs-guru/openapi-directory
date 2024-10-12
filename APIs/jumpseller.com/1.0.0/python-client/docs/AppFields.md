# AppFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | Author of the app | [optional] 
**code** | **str** | Code of the app | [optional] 
**description** | **str** | Description of the app | [optional] 
**js** | **bool** | True if the app is a jsapp | [optional] [default to False]
**name** | **str** | Name of the app | [optional] 
**page** | **str** | Page of the app | [optional] 

## Example

```python
from openapi_client.models.app_fields import AppFields

# TODO update the JSON string below
json = "{}"
# create an instance of AppFields from a JSON string
app_fields_instance = AppFields.from_json(json)
# print the JSON string representation of the object
print(AppFields.to_json())

# convert the object into a dict
app_fields_dict = app_fields_instance.to_dict()
# create an instance of AppFields from a dict
app_fields_from_dict = AppFields.from_dict(app_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


