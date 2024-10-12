# UpdateProjectConfigRequest

Request for UpdateProjectConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_config** | [**ProjectConfig**](ProjectConfig.md) |  | [optional] 
**update_mask** | **str** | A FieldMask specifying which fields of the project_config to modify. Only the fields in the mask will be modified. If no mask is provided, this request is no-op. | [optional] 

## Example

```python
from openapi_client.models.update_project_config_request import UpdateProjectConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProjectConfigRequest from a JSON string
update_project_config_request_instance = UpdateProjectConfigRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProjectConfigRequest.to_json())

# convert the object into a dict
update_project_config_request_dict = update_project_config_request_instance.to_dict()
# create an instance of UpdateProjectConfigRequest from a dict
update_project_config_request_from_dict = UpdateProjectConfigRequest.from_dict(update_project_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


