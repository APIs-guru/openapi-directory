# V1DefaultIdentity

A default identity in the Identity and Access Management API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the default identity. | [optional] 
**name** | **str** | Default identity resource name. An example name would be: &#x60;services/serviceconsumermanagement.googleapis.com/projects/123/defaultIdentity&#x60; | [optional] 
**tag** | **str** | The Default Identity tag. If specified when creating the account, the tag must be present in activation_grants. If not specified when creating the account, the tag is set to the tag specified in activation_grants. | [optional] 
**unique_id** | **str** | The unique and stable id of the default identity. | [optional] 

## Example

```python
from openapi_client.models.v1_default_identity import V1DefaultIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of V1DefaultIdentity from a JSON string
v1_default_identity_instance = V1DefaultIdentity.from_json(json)
# print the JSON string representation of the object
print(V1DefaultIdentity.to_json())

# convert the object into a dict
v1_default_identity_dict = v1_default_identity_instance.to_dict()
# create an instance of V1DefaultIdentity from a dict
v1_default_identity_from_dict = V1DefaultIdentity.from_dict(v1_default_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


