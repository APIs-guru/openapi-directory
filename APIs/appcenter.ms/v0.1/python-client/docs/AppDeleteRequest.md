# AppDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the app to be deleted from the distribution group | 

## Example

```python
from openapi_client.models.app_delete_request import AppDeleteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppDeleteRequest from a JSON string
app_delete_request_instance = AppDeleteRequest.from_json(json)
# print the JSON string representation of the object
print(AppDeleteRequest.to_json())

# convert the object into a dict
app_delete_request_dict = app_delete_request_instance.to_dict()
# create an instance of AppDeleteRequest from a dict
app_delete_request_from_dict = AppDeleteRequest.from_dict(app_delete_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


