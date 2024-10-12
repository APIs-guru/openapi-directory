# GatewayResourceDescriptionList

A pageable list of gateway resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[GatewayResourceDescription]**](GatewayResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.gateway_resource_description_list import GatewayResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayResourceDescriptionList from a JSON string
gateway_resource_description_list_instance = GatewayResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(GatewayResourceDescriptionList.to_json())

# convert the object into a dict
gateway_resource_description_list_dict = gateway_resource_description_list_instance.to_dict()
# create an instance of GatewayResourceDescriptionList from a dict
gateway_resource_description_list_from_dict = GatewayResourceDescriptionList.from_dict(gateway_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


