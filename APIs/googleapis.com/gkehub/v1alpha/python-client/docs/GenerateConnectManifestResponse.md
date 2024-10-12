# GenerateConnectManifestResponse

GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | [**List[ConnectAgentResource]**](ConnectAgentResource.md) | The ordered list of Kubernetes resources that need to be applied to the cluster for GKE Connect agent installation/upgrade. | [optional] 

## Example

```python
from openapi_client.models.generate_connect_manifest_response import GenerateConnectManifestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateConnectManifestResponse from a JSON string
generate_connect_manifest_response_instance = GenerateConnectManifestResponse.from_json(json)
# print the JSON string representation of the object
print(GenerateConnectManifestResponse.to_json())

# convert the object into a dict
generate_connect_manifest_response_dict = generate_connect_manifest_response_instance.to_dict()
# create an instance of GenerateConnectManifestResponse from a dict
generate_connect_manifest_response_from_dict = GenerateConnectManifestResponse.from_dict(generate_connect_manifest_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


