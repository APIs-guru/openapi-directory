# V1Beta1ListProducerOverridesResponse

Response message for ListProducerOverrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying which result to start with; returned by a previous list call. | [optional] 
**overrides** | [**List[V1Beta1QuotaOverride]**](V1Beta1QuotaOverride.md) | Producer overrides on this limit. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_list_producer_overrides_response import V1Beta1ListProducerOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ListProducerOverridesResponse from a JSON string
v1_beta1_list_producer_overrides_response_instance = V1Beta1ListProducerOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ListProducerOverridesResponse.to_json())

# convert the object into a dict
v1_beta1_list_producer_overrides_response_dict = v1_beta1_list_producer_overrides_response_instance.to_dict()
# create an instance of V1Beta1ListProducerOverridesResponse from a dict
v1_beta1_list_producer_overrides_response_from_dict = V1Beta1ListProducerOverridesResponse.from_dict(v1_beta1_list_producer_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


