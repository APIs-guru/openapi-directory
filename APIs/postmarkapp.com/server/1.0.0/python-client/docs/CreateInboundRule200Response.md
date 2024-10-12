# CreateInboundRule200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**rule** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_inbound_rule200_response import CreateInboundRule200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInboundRule200Response from a JSON string
create_inbound_rule200_response_instance = CreateInboundRule200Response.from_json(json)
# print the JSON string representation of the object
print(CreateInboundRule200Response.to_json())

# convert the object into a dict
create_inbound_rule200_response_dict = create_inbound_rule200_response_instance.to_dict()
# create an instance of CreateInboundRule200Response from a dict
create_inbound_rule200_response_from_dict = CreateInboundRule200Response.from_dict(create_inbound_rule200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


