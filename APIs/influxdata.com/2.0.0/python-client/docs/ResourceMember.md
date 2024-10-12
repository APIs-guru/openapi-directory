# ResourceMember


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] [readonly] 
**links** | [**UserResponseLinks**](UserResponseLinks.md) |  | [optional] 
**name** | **str** |  | 
**oauth_id** | **str** |  | [optional] 
**status** | **str** | If inactive the user is inactive. | [optional] [default to 'active']
**role** | **str** |  | [optional] [default to 'member']

## Example

```python
from openapi_client.models.resource_member import ResourceMember

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceMember from a JSON string
resource_member_instance = ResourceMember.from_json(json)
# print the JSON string representation of the object
print(ResourceMember.to_json())

# convert the object into a dict
resource_member_dict = resource_member_instance.to_dict()
# create an instance of ResourceMember from a dict
resource_member_from_dict = ResourceMember.from_dict(resource_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


