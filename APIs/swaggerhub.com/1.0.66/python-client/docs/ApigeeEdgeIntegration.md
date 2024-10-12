# ApigeeEdgeIntegration

Configuration details for the [Apigee Edge](https://support.smartbear.com/swaggerhub/docs/integrations/apigee-edge.html) integration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**api_name** | **str** | Name for the API that is going to be saved in your Apigee account | 
**config_type** | **str** | Integration type | 
**email** | **str** | Email address of your Apigee account | 
**host** | **str** | Apigee Edge Management instance URL. Use the default URL &#x60;https://api.enterprise.apigee.com/v1&#x60; for the cloud version of Apigee Edge. If using an On-Premise deployment, enter the URL to your Edge instance. | [optional] [default to 'https://api.enterprise.apigee.com/v1']
**organization** | **str** | Organization where the API will be saved | 
**password** | **str** | Password of your Apigee account. Write-only property. Required to create and update the integration. | [optional] 
**target_url** | **str** | Target endpoint for proxy | 

## Example

```python
from openapi_client.models.apigee_edge_integration import ApigeeEdgeIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of ApigeeEdgeIntegration from a JSON string
apigee_edge_integration_instance = ApigeeEdgeIntegration.from_json(json)
# print the JSON string representation of the object
print(ApigeeEdgeIntegration.to_json())

# convert the object into a dict
apigee_edge_integration_dict = apigee_edge_integration_instance.to_dict()
# create an instance of ApigeeEdgeIntegration from a dict
apigee_edge_integration_from_dict = ApigeeEdgeIntegration.from_dict(apigee_edge_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


