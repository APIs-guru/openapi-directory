# AddAADGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID (UUID) of the aad group | [optional] 

## Example

```python
from openapi_client.models.add_aad_group_response import AddAADGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddAADGroupResponse from a JSON string
add_aad_group_response_instance = AddAADGroupResponse.from_json(json)
# print the JSON string representation of the object
print(AddAADGroupResponse.to_json())

# convert the object into a dict
add_aad_group_response_dict = add_aad_group_response_instance.to_dict()
# create an instance of AddAADGroupResponse from a dict
add_aad_group_response_from_dict = AddAADGroupResponse.from_dict(add_aad_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


