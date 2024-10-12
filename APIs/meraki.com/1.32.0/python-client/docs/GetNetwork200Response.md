# GetNetwork200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enrollment_string** | **str** | Enrollment string for the network | [optional] 
**id** | **str** | Network ID | [optional] 
**is_bound_to_config_template** | **bool** | If the network is bound to a config template | [optional] 
**name** | **str** | Network name | [optional] 
**notes** | **str** | Notes for the network | [optional] 
**organization_id** | **str** | Organization ID | [optional] 
**product_types** | **List[str]** | List of the product types that the network supports | [optional] 
**tags** | **List[str]** | Network tags | [optional] 
**time_zone** | **str** | Timezone of the network | [optional] 
**url** | **str** | URL to the network Dashboard UI | [optional] 

## Example

```python
from openapi_client.models.get_network200_response import GetNetwork200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetwork200Response from a JSON string
get_network200_response_instance = GetNetwork200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetwork200Response.to_json())

# convert the object into a dict
get_network200_response_dict = get_network200_response_instance.to_dict()
# create an instance of GetNetwork200Response from a dict
get_network200_response_from_dict = GetNetwork200Response.from_dict(get_network200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


