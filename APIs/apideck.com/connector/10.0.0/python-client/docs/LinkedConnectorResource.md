# LinkedConnectorResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream_id** | **str** | ID of the resource in the Connector&#39;s API (downstream) | [optional] 
**downstream_name** | **str** | Name of the resource in the Connector&#39;s API (downstream) | [optional] 
**id** | **str** | ID of the resource, typically a lowercased version of name. | [optional] 
**name** | **str** | Name of the resource (plural) | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.linked_connector_resource import LinkedConnectorResource

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedConnectorResource from a JSON string
linked_connector_resource_instance = LinkedConnectorResource.from_json(json)
# print the JSON string representation of the object
print(LinkedConnectorResource.to_json())

# convert the object into a dict
linked_connector_resource_dict = linked_connector_resource_instance.to_dict()
# create an instance of LinkedConnectorResource from a dict
linked_connector_resource_from_dict = LinkedConnectorResource.from_dict(linked_connector_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


