# ListInboundRules200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inbound_rules** | [**List[ListInboundRules200ResponseInboundRulesInner]**](ListInboundRules200ResponseInboundRulesInner.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_inbound_rules200_response import ListInboundRules200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListInboundRules200Response from a JSON string
list_inbound_rules200_response_instance = ListInboundRules200Response.from_json(json)
# print the JSON string representation of the object
print(ListInboundRules200Response.to_json())

# convert the object into a dict
list_inbound_rules200_response_dict = list_inbound_rules200_response_instance.to_dict()
# create an instance of ListInboundRules200Response from a dict
list_inbound_rules200_response_from_dict = ListInboundRules200Response.from_dict(list_inbound_rules200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


