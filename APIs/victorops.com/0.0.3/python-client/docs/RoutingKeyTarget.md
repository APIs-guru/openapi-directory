# RoutingKeyTarget

Routing key target

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_url** | **str** |  | [optional] 
**policy_name** | **str** |  | [optional] 
**policy_slug** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.routing_key_target import RoutingKeyTarget

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingKeyTarget from a JSON string
routing_key_target_instance = RoutingKeyTarget.from_json(json)
# print the JSON string representation of the object
print(RoutingKeyTarget.to_json())

# convert the object into a dict
routing_key_target_dict = routing_key_target_instance.to_dict()
# create an instance of RoutingKeyTarget from a dict
routing_key_target_from_dict = RoutingKeyTarget.from_dict(routing_key_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


