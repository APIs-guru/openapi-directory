# V1Beta1ServiceIdentity

A service identity in the Identity and Access Management API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the service identity. | [optional] 
**name** | **str** | P4 service identity resource name. An example name would be: &#x60;services/serviceconsumermanagement.googleapis.com/projects/123/serviceIdentities/default&#x60; | [optional] 
**tag** | **str** | The P4 service identity configuration tag. This must be defined in activation_grants. If not specified when creating the account, the tag is set to \&quot;default\&quot;. | [optional] 
**unique_id** | **str** | The unique and stable id of the service identity. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_service_identity import V1Beta1ServiceIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ServiceIdentity from a JSON string
v1_beta1_service_identity_instance = V1Beta1ServiceIdentity.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ServiceIdentity.to_json())

# convert the object into a dict
v1_beta1_service_identity_dict = v1_beta1_service_identity_instance.to_dict()
# create an instance of V1Beta1ServiceIdentity from a dict
v1_beta1_service_identity_from_dict = V1Beta1ServiceIdentity.from_dict(v1_beta1_service_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


