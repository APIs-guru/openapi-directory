# ServerVersionCapability

The server capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The server version name. | [optional] [readonly] 
**status** | [**CapabilityStatus**](CapabilityStatus.md) |  | [optional] 
**supported_editions** | [**List[EditionCapability]**](EditionCapability.md) | The list of supported database editions. | [optional] [readonly] 
**supported_elastic_pool_editions** | [**List[ElasticPoolEditionCapability]**](ElasticPoolEditionCapability.md) | The list of supported elastic pool editions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.server_version_capability import ServerVersionCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ServerVersionCapability from a JSON string
server_version_capability_instance = ServerVersionCapability.from_json(json)
# print the JSON string representation of the object
print(ServerVersionCapability.to_json())

# convert the object into a dict
server_version_capability_dict = server_version_capability_instance.to_dict()
# create an instance of ServerVersionCapability from a dict
server_version_capability_from_dict = ServerVersionCapability.from_dict(server_version_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


