# ClientGroup

Represents a collection of clients of a resource. A client group can represent the clients of a port, process, or a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Resource properties. | [optional] 
**etag** | **str** | Resource ETAG. | [optional] 
**kind** | **str** | Additional resource type qualifier. | 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.client_group import ClientGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ClientGroup from a JSON string
client_group_instance = ClientGroup.from_json(json)
# print the JSON string representation of the object
print(ClientGroup.to_json())

# convert the object into a dict
client_group_dict = client_group_instance.to_dict()
# create an instance of ClientGroup from a dict
client_group_from_dict = ClientGroup.from_dict(client_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


