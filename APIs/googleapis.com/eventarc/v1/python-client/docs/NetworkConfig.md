# NetworkConfig

Represents a network config to be used for destination resolution and connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_attachment** | **str** | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: &#x60;projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}&#x60; | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


