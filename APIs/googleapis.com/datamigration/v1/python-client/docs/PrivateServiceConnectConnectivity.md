# PrivateServiceConnectConnectivity

[Private Service Connect connectivity](https://cloud.google.com/vpc/docs/private-service-connect#service-attachments)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_attachment** | **str** | Required. A service attachment that exposes a database, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} | [optional] 

## Example

```python
from openapi_client.models.private_service_connect_connectivity import PrivateServiceConnectConnectivity

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateServiceConnectConnectivity from a JSON string
private_service_connect_connectivity_instance = PrivateServiceConnectConnectivity.from_json(json)
# print the JSON string representation of the object
print(PrivateServiceConnectConnectivity.to_json())

# convert the object into a dict
private_service_connect_connectivity_dict = private_service_connect_connectivity_instance.to_dict()
# create an instance of PrivateServiceConnectConnectivity from a dict
private_service_connect_connectivity_from_dict = PrivateServiceConnectConnectivity.from_dict(private_service_connect_connectivity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


