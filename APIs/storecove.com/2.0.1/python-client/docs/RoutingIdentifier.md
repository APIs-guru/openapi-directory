# RoutingIdentifier

An electronic routing identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The actual identifier. | [optional] 
**scheme** | **str** | The scheme of the identifier. See &lt;&lt;_receiver_identifiers_list&gt;&gt; for a list. | [optional] 

## Example

```python
from openapi_client.models.routing_identifier import RoutingIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingIdentifier from a JSON string
routing_identifier_instance = RoutingIdentifier.from_json(json)
# print the JSON string representation of the object
print(RoutingIdentifier.to_json())

# convert the object into a dict
routing_identifier_dict = routing_identifier_instance.to_dict()
# create an instance of RoutingIdentifier from a dict
routing_identifier_from_dict = RoutingIdentifier.from_dict(routing_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


