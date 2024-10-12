# UserSetupProgress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_steps** | **List[str]** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_setup_progress import UserSetupProgress

# TODO update the JSON string below
json = "{}"
# create an instance of UserSetupProgress from a JSON string
user_setup_progress_instance = UserSetupProgress.from_json(json)
# print the JSON string representation of the object
print(UserSetupProgress.to_json())

# convert the object into a dict
user_setup_progress_dict = user_setup_progress_instance.to_dict()
# create an instance of UserSetupProgress from a dict
user_setup_progress_from_dict = UserSetupProgress.from_dict(user_setup_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


