# AddAppTesterResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_id** | **int** | The ID of the release the user was added to | 
**user_id** | **str** | The user ID of the tester that needs to be added | 

## Example

```python
from openapi_client.models.add_app_tester_response import AddAppTesterResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddAppTesterResponse from a JSON string
add_app_tester_response_instance = AddAppTesterResponse.from_json(json)
# print the JSON string representation of the object
print(AddAppTesterResponse.to_json())

# convert the object into a dict
add_app_tester_response_dict = add_app_tester_response_instance.to_dict()
# create an instance of AddAppTesterResponse from a dict
add_app_tester_response_from_dict = AddAppTesterResponse.from_dict(add_app_tester_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


