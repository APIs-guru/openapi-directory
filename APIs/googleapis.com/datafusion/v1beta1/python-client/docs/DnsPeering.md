# DnsPeering

DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Optional description of the dns zone. | [optional] 
**domain** | **str** | Required. The dns name suffix of the zone. | [optional] 
**name** | **str** | Required. The resource name of the dns peering zone. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering} | [optional] 
**target_network** | **str** | Optional. Optional target network to which dns peering should happen. | [optional] 
**target_project** | **str** | Optional. Optional target project to which dns peering should happen. | [optional] 

## Example

```python
from openapi_client.models.dns_peering import DnsPeering

# TODO update the JSON string below
json = "{}"
# create an instance of DnsPeering from a JSON string
dns_peering_instance = DnsPeering.from_json(json)
# print the JSON string representation of the object
print(DnsPeering.to_json())

# convert the object into a dict
dns_peering_dict = dns_peering_instance.to_dict()
# create an instance of DnsPeering from a dict
dns_peering_from_dict = DnsPeering.from_dict(dns_peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


