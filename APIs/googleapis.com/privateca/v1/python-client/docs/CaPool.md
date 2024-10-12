# CaPool

A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuance_policy** | [**IssuancePolicy**](IssuancePolicy.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Labels with user-defined metadata. | [optional] 
**name** | **str** | Output only. The resource name for this CaPool in the format &#x60;projects/*/locations/*/caPools/*&#x60;. | [optional] [readonly] 
**publishing_options** | [**PublishingOptions**](PublishingOptions.md) |  | [optional] 
**tier** | **str** | Required. Immutable. The Tier of this CaPool. | [optional] 

## Example

```python
from openapi_client.models.ca_pool import CaPool

# TODO update the JSON string below
json = "{}"
# create an instance of CaPool from a JSON string
ca_pool_instance = CaPool.from_json(json)
# print the JSON string representation of the object
print(CaPool.to_json())

# convert the object into a dict
ca_pool_dict = ca_pool_instance.to_dict()
# create an instance of CaPool from a dict
ca_pool_from_dict = CaPool.from_dict(ca_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


