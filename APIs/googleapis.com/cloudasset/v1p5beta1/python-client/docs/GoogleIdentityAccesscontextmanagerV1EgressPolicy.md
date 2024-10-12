# GoogleIdentityAccesscontextmanagerV1EgressPolicy

Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_from** | [**GoogleIdentityAccesscontextmanagerV1EgressFrom**](GoogleIdentityAccesscontextmanagerV1EgressFrom.md) |  | [optional] 
**egress_to** | [**GoogleIdentityAccesscontextmanagerV1EgressTo**](GoogleIdentityAccesscontextmanagerV1EgressTo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_egress_policy import GoogleIdentityAccesscontextmanagerV1EgressPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1EgressPolicy from a JSON string
google_identity_accesscontextmanager_v1_egress_policy_instance = GoogleIdentityAccesscontextmanagerV1EgressPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1EgressPolicy.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_egress_policy_dict = google_identity_accesscontextmanager_v1_egress_policy_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1EgressPolicy from a dict
google_identity_accesscontextmanager_v1_egress_policy_from_dict = GoogleIdentityAccesscontextmanagerV1EgressPolicy.from_dict(google_identity_accesscontextmanager_v1_egress_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


