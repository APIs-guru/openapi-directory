# ClientDiscoveryForLogSpecification

Class to represent shoebox log specification in json client discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_duration** | **str** | Blobs created in customer storage account per hour | [optional] 
**display_name** | **str** | Localized display name | [optional] 
**name** | **str** | Name of the log. | [optional] 

## Example

```python
from openapi_client.models.client_discovery_for_log_specification import ClientDiscoveryForLogSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of ClientDiscoveryForLogSpecification from a JSON string
client_discovery_for_log_specification_instance = ClientDiscoveryForLogSpecification.from_json(json)
# print the JSON string representation of the object
print(ClientDiscoveryForLogSpecification.to_json())

# convert the object into a dict
client_discovery_for_log_specification_dict = client_discovery_for_log_specification_instance.to_dict()
# create an instance of ClientDiscoveryForLogSpecification from a dict
client_discovery_for_log_specification_from_dict = ClientDiscoveryForLogSpecification.from_dict(client_discovery_for_log_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


