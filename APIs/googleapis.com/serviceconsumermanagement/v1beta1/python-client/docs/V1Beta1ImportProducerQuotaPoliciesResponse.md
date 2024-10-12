# V1Beta1ImportProducerQuotaPoliciesResponse

Response message for ImportProducerQuotaPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**List[V1Beta1ProducerQuotaPolicy]**](V1Beta1ProducerQuotaPolicy.md) | The policies that were created from the imported data. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_import_producer_quota_policies_response import V1Beta1ImportProducerQuotaPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ImportProducerQuotaPoliciesResponse from a JSON string
v1_beta1_import_producer_quota_policies_response_instance = V1Beta1ImportProducerQuotaPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ImportProducerQuotaPoliciesResponse.to_json())

# convert the object into a dict
v1_beta1_import_producer_quota_policies_response_dict = v1_beta1_import_producer_quota_policies_response_instance.to_dict()
# create an instance of V1Beta1ImportProducerQuotaPoliciesResponse from a dict
v1_beta1_import_producer_quota_policies_response_from_dict = V1Beta1ImportProducerQuotaPoliciesResponse.from_dict(v1_beta1_import_producer_quota_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


