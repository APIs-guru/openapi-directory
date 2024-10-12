# Capability

Cosmos DB capability object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the Cosmos DB capability. For example, \&quot;name\&quot;: \&quot;EnableCassandra\&quot;. Current values also include \&quot;EnableTable\&quot; and \&quot;EnableGremlin\&quot;. | [optional] 

## Example

```python
from openapi_client.models.capability import Capability

# TODO update the JSON string below
json = "{}"
# create an instance of Capability from a JSON string
capability_instance = Capability.from_json(json)
# print the JSON string representation of the object
print(Capability.to_json())

# convert the object into a dict
capability_dict = capability_instance.to_dict()
# create an instance of Capability from a dict
capability_from_dict = Capability.from_dict(capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


