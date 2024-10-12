# ExternalServiceCost

The external service cost is a portion of the total cost, these costs are not additive with total_bytes_billed. Moreover, this field only track external service costs that will show up as BigQuery costs (e.g. training BigQuery ML job with google cloud CAIP or Automl Tables services), not other costs which may be accrued by running the query (e.g. reading from Bigtable or Cloud Storage). The external service costs with different billing sku (e.g. CAIP job is charged based on VM usage) are converted to BigQuery billed_bytes and slot_ms with equivalent amount of US dollars. Services may not directly correlate to these metrics, but these are the equivalents for billing purposes. Output only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_billed** | **str** | External service cost in terms of bigquery bytes billed. | [optional] 
**bytes_processed** | **str** | External service cost in terms of bigquery bytes processed. | [optional] 
**external_service** | **str** | External service name. | [optional] 
**reserved_slot_count** | **str** | Non-preemptable reserved slots used for external job. For example, reserved slots for Cloua AI Platform job are the VM usages converted to BigQuery slot with equivalent mount of price. | [optional] 
**slot_ms** | **str** | External service cost in terms of bigquery slot milliseconds. | [optional] 

## Example

```python
from openapi_client.models.external_service_cost import ExternalServiceCost

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalServiceCost from a JSON string
external_service_cost_instance = ExternalServiceCost.from_json(json)
# print the JSON string representation of the object
print(ExternalServiceCost.to_json())

# convert the object into a dict
external_service_cost_dict = external_service_cost_instance.to_dict()
# create an instance of ExternalServiceCost from a dict
external_service_cost_from_dict = ExternalServiceCost.from_dict(external_service_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


