# ActionResource

The Action-Resource item.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](.md) |  | [optional] 
**resource** | [**Resource**](.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_resource import ActionResource

# TODO update the JSON string below
json = "{}"
# create an instance of ActionResource from a JSON string
action_resource_instance = ActionResource.from_json(json)
# print the JSON string representation of the object
print(ActionResource.to_json())

# convert the object into a dict
action_resource_dict = action_resource_instance.to_dict()
# create an instance of ActionResource from a dict
action_resource_from_dict = ActionResource.from_dict(action_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


