# UpdateAProjectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** | The branch that this project should be monitoring | [optional] 
**owner** | [**UpdateAProjectRequestOwner**](UpdateAProjectRequestOwner.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_a_project_request import UpdateAProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAProjectRequest from a JSON string
update_a_project_request_instance = UpdateAProjectRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAProjectRequest.to_json())

# convert the object into a dict
update_a_project_request_dict = update_a_project_request_instance.to_dict()
# create an instance of UpdateAProjectRequest from a dict
update_a_project_request_from_dict = UpdateAProjectRequest.from_dict(update_a_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


