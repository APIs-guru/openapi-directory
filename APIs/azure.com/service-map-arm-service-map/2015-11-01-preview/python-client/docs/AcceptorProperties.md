# AcceptorProperties

Properties for an acceptor relationship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ProcessReference**](ProcessReference.md) |  | 
**end_time** | **datetime** | Relationship end time. | [optional] 
**source** | [**PortReference**](PortReference.md) |  | 
**start_time** | **datetime** | Relationship start time. | [optional] 

## Example

```python
from openapi_client.models.acceptor_properties import AcceptorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptorProperties from a JSON string
acceptor_properties_instance = AcceptorProperties.from_json(json)
# print the JSON string representation of the object
print(AcceptorProperties.to_json())

# convert the object into a dict
acceptor_properties_dict = acceptor_properties_instance.to_dict()
# create an instance of AcceptorProperties from a dict
acceptor_properties_from_dict = AcceptorProperties.from_dict(acceptor_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


