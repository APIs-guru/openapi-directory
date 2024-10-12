# PrivateLinkServiceConnectionStateProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions_required** | **str** | The actions required for private link service connection. | [optional] [readonly] 
**description** | **str** | The private link service connection description. | 
**status** | **str** | The private link service connection status. | 

## Example

```python
from openapi_client.models.private_link_service_connection_state_property import PrivateLinkServiceConnectionStateProperty

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateLinkServiceConnectionStateProperty from a JSON string
private_link_service_connection_state_property_instance = PrivateLinkServiceConnectionStateProperty.from_json(json)
# print the JSON string representation of the object
print(PrivateLinkServiceConnectionStateProperty.to_json())

# convert the object into a dict
private_link_service_connection_state_property_dict = private_link_service_connection_state_property_instance.to_dict()
# create an instance of PrivateLinkServiceConnectionStateProperty from a dict
private_link_service_connection_state_property_from_dict = PrivateLinkServiceConnectionStateProperty.from_dict(private_link_service_connection_state_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


