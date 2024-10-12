# ApigatewayGateway

A Gateway is an API-aware HTTP proxy. It performs API-Method and/or API-Consumer specific actions based on an API Config such as authentication, policy enforcement, and backend selection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_config** | **str** | Required. Resource name of the API Config for this Gateway. Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig} | [optional] 
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**default_hostname** | **str** | Output only. The default API Gateway host name of the form &#x60;{gateway_id}-{hash}.{region_code}.gateway.dev&#x60;. | [optional] [readonly] 
**display_name** | **str** | Optional. Display name. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**name** | **str** | Output only. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway} | [optional] [readonly] 
**state** | **str** | Output only. The current state of the Gateway. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.apigateway_gateway import ApigatewayGateway

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayGateway from a JSON string
apigateway_gateway_instance = ApigatewayGateway.from_json(json)
# print the JSON string representation of the object
print(ApigatewayGateway.to_json())

# convert the object into a dict
apigateway_gateway_dict = apigateway_gateway_instance.to_dict()
# create an instance of ApigatewayGateway from a dict
apigateway_gateway_from_dict = ApigatewayGateway.from_dict(apigateway_gateway_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


