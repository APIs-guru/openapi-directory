# GoogleIdentityAccesscontextmanagerV1Condition

A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_policy** | [**GoogleIdentityAccesscontextmanagerV1DevicePolicy**](GoogleIdentityAccesscontextmanagerV1DevicePolicy.md) |  | [optional] 
**ip_subnetworks** | **List[str]** | CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, \&quot;192.0.2.0/24\&quot; is accepted but \&quot;192.0.2.1/24\&quot; is not. Similarly, for IPv6, \&quot;2001:db8::/32\&quot; is accepted whereas \&quot;2001:db8::1/32\&quot; is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed. | [optional] 
**members** | **List[str]** | The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: &#x60;user:{emailid}&#x60; &#x60;serviceAccount:{emailid}&#x60; If not specified, a request may come from any user. | [optional] 
**negate** | **bool** | Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false. | [optional] 
**regions** | **List[str]** | The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes. | [optional] 
**required_access_levels** | **List[str]** | A list of other access levels defined in the same &#x60;Policy&#x60;, referenced by resource name. Referencing an &#x60;AccessLevel&#x60; which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: \&quot;&#x60;accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME\&quot;&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_identity_accesscontextmanager_v1_condition import GoogleIdentityAccesscontextmanagerV1Condition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIdentityAccesscontextmanagerV1Condition from a JSON string
google_identity_accesscontextmanager_v1_condition_instance = GoogleIdentityAccesscontextmanagerV1Condition.from_json(json)
# print the JSON string representation of the object
print(GoogleIdentityAccesscontextmanagerV1Condition.to_json())

# convert the object into a dict
google_identity_accesscontextmanager_v1_condition_dict = google_identity_accesscontextmanager_v1_condition_instance.to_dict()
# create an instance of GoogleIdentityAccesscontextmanagerV1Condition from a dict
google_identity_accesscontextmanager_v1_condition_from_dict = GoogleIdentityAccesscontextmanagerV1Condition.from_dict(google_identity_accesscontextmanager_v1_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


