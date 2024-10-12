# CreateGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GroupResource**](GroupResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_group_response import CreateGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGroupResponse from a JSON string
create_group_response_instance = CreateGroupResponse.from_json(json)
# print the JSON string representation of the object
print(CreateGroupResponse.to_json())

# convert the object into a dict
create_group_response_dict = create_group_response_instance.to_dict()
# create an instance of CreateGroupResponse from a dict
create_group_response_from_dict = CreateGroupResponse.from_dict(create_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


