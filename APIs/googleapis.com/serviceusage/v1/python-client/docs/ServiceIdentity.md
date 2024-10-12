# ServiceIdentity

Service identity for a service. This is the identity that service producer should use to access consumer resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the service account that a service producer would use to access consumer resources. | [optional] 
**unique_id** | **str** | The unique and stable id of the service account. https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount | [optional] 

## Example

```python
from openapi_client.models.service_identity import ServiceIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceIdentity from a JSON string
service_identity_instance = ServiceIdentity.from_json(json)
# print the JSON string representation of the object
print(ServiceIdentity.to_json())

# convert the object into a dict
service_identity_dict = service_identity_instance.to_dict()
# create an instance of ServiceIdentity from a dict
service_identity_from_dict = ServiceIdentity.from_dict(service_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


