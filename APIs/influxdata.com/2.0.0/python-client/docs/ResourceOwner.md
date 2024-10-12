# ResourceOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] [readonly] 
**links** | [**UserResponseLinks**](UserResponseLinks.md) |  | [optional] 
**name** | **str** |  | 
**oauth_id** | **str** |  | [optional] 
**status** | **str** | If inactive the user is inactive. | [optional] [default to 'active']
**role** | **str** |  | [optional] [default to 'owner']

## Example

```python
from openapi_client.models.resource_owner import ResourceOwner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceOwner from a JSON string
resource_owner_instance = ResourceOwner.from_json(json)
# print the JSON string representation of the object
print(ResourceOwner.to_json())

# convert the object into a dict
resource_owner_dict = resource_owner_instance.to_dict()
# create an instance of ResourceOwner from a dict
resource_owner_from_dict = ResourceOwner.from_dict(resource_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


