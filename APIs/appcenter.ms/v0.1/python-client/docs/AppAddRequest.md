# AppAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the app to be added to the distribution group | 

## Example

```python
from openapi_client.models.app_add_request import AppAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppAddRequest from a JSON string
app_add_request_instance = AppAddRequest.from_json(json)
# print the JSON string representation of the object
print(AppAddRequest.to_json())

# convert the object into a dict
app_add_request_dict = app_add_request_instance.to_dict()
# create an instance of AppAddRequest from a dict
app_add_request_from_dict = AppAddRequest.from_dict(app_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


