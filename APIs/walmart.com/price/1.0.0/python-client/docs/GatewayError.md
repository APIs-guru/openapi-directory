# GatewayError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**causes** | [**List[UpdatePrice200ResponseErrorsInnerCausesInner]**](UpdatePrice200ResponseErrorsInnerCausesInner.md) |  | [optional] 
**code** | **str** |  | 
**component** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**error_identifiers** | **Dict[str, object]** |  | [optional] 
**var_field** | **str** |  | [optional] 
**gateway_error_category** | **str** |  | [optional] 
**info** | **str** |  | [optional] 
**service_name** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.gateway_error import GatewayError

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayError from a JSON string
gateway_error_instance = GatewayError.from_json(json)
# print the JSON string representation of the object
print(GatewayError.to_json())

# convert the object into a dict
gateway_error_dict = gateway_error_instance.to_dict()
# create an instance of GatewayError from a dict
gateway_error_from_dict = GatewayError.from_dict(gateway_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


