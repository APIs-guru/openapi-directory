# ApplicationGateway

Application gateway resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayPropertiesFormat**](ApplicationGatewayPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Identifier. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway import ApplicationGateway

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGateway from a JSON string
application_gateway_instance = ApplicationGateway.from_json(json)
# print the JSON string representation of the object
print(ApplicationGateway.to_json())

# convert the object into a dict
application_gateway_dict = application_gateway_instance.to_dict()
# create an instance of ApplicationGateway from a dict
application_gateway_from_dict = ApplicationGateway.from_dict(application_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


