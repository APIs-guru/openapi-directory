# GoogleIdentityAccesscontextmanagerV1VpcNetworkSource

The originating network source in Google Cloud.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vpc_subnetwork** | [**GoogleIdentityAccesscontextmanagerV1VpcSubNetwork**](GoogleIdentityAccesscontextmanagerV1VpcSubNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_vpc_network_source import GoogleIdentityAccesscontextmanagerV1VpcNetworkSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1VpcNetworkSource from a JSON string
google_identity_accesscontextmanager_v1_vpc_network_source_instance = GoogleIdentityAccesscontextmanagerV1VpcNetworkSource.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1VpcNetworkSource.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_vpc_network_source_dict = google_identity_accesscontextmanager_v1_vpc_network_source_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1VpcNetworkSource from a dict
google_identity_accesscontextmanager_v1_vpc_network_source_from_dict = GoogleIdentityAccesscontextmanagerV1VpcNetworkSource.from_dict(google_identity_accesscontextmanager_v1_vpc_network_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


