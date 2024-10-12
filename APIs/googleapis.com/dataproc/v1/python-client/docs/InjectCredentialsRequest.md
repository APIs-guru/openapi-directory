# InjectCredentialsRequest

A request to inject credentials into a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_uuid** | **str** | Required. The cluster UUID. | [optional] 
**credentials_ciphertext** | **str** | Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of the encrypted credentials are not written to audit logs. | [optional] 

## Example

```python
from openapi_client.models.inject_credentials_request import InjectCredentialsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InjectCredentialsRequest from a JSON string
inject_credentials_request_instance = InjectCredentialsRequest.from_json(json)
# print the JSON string representation of the object
print(InjectCredentialsRequest.to_json())

# convert the object into a dict
inject_credentials_request_dict = inject_credentials_request_instance.to_dict()
# create an instance of InjectCredentialsRequest from a dict
inject_credentials_request_from_dict = InjectCredentialsRequest.from_dict(inject_credentials_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


