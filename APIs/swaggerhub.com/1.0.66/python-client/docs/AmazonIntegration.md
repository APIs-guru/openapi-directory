# AmazonIntegration

Common configuration details for Amazon integrations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the integration is enabled or disabled | [optional] [default to True]
**id** | **str** | ID of the integration | [optional] [readonly] 
**name** | **str** | The display name of the integration. Must be unique among all integrations configured for the given API version. | 
**access_key** | **str** | AWS access key. Write-only property. Required to create and update the integration. | [optional] 
**api_id** | **str** | AWS ID of the API to update. Empty value will create a new API in AWS. | [optional] 
**base_path_mode** | **str** | How to handle the API&#39;s &#x60;basePath&#x60; value. Refer to [AWS documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html) for details. | [optional] [default to 'ignore']
**deployment_mode** | **str** | Should be \&quot;on save\&quot;. The value \&quot;never\&quot; means the integration is disabled. | [optional] [default to 'on save']
**publish_mode** | **str** | How to update an existing API in AWS | [optional] [default to 'merge']
**region** | **str** | AWS region where the API will be published | 
**secret_key** | **str** | AWS secret key. Write-only property. Required to create and update the integration. | [optional] 
**update_definition** | **bool** | Whether to update the API definition with Amazon-specific extensions and compatibility modifications | [optional] [default to False]

## Example

```python
from openapi_client.models.amazon_integration import AmazonIntegration

# TODO update the JSON string below
json = "{}"
# create an instance of AmazonIntegration from a JSON string
amazon_integration_instance = AmazonIntegration.from_json(json)
# print the JSON string representation of the object
print(AmazonIntegration.to_json())

# convert the object into a dict
amazon_integration_dict = amazon_integration_instance.to_dict()
# create an instance of AmazonIntegration from a dict
amazon_integration_from_dict = AmazonIntegration.from_dict(amazon_integration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


