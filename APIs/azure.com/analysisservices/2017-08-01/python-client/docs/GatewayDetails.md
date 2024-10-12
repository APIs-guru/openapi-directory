# GatewayDetails

The gateway details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dmts_cluster_uri** | **str** | Uri of the DMTS cluster. | [optional] [readonly] 
**gateway_object_id** | **str** | Gateway object id from in the DMTS cluster for the gateway resource. | [optional] [readonly] 
**gateway_resource_id** | **str** | Gateway resource to be associated with the server. | [optional] 

## Example

```python
from openapi_client.models.gateway_details import GatewayDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayDetails from a JSON string
gateway_details_instance = GatewayDetails.from_json(json)
# print the JSON string representation of the object
print(GatewayDetails.to_json())

# convert the object into a dict
gateway_details_dict = gateway_details_instance.to_dict()
# create an instance of GatewayDetails from a dict
gateway_details_from_dict = GatewayDetails.from_dict(gateway_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


