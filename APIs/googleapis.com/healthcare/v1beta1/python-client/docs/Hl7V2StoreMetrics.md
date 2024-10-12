# Hl7V2StoreMetrics

List of metrics for a given HL7v2 store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**List[Hl7V2StoreMetric]**](Hl7V2StoreMetric.md) | List of HL7v2 store metrics by message type. | [optional] 
**name** | **str** | The resource name of the HL7v2 store to get metrics for, in the format &#x60;projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.hl7_v2_store_metrics import Hl7V2StoreMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of Hl7V2StoreMetrics from a JSON string
hl7_v2_store_metrics_instance = Hl7V2StoreMetrics.from_json(json)
# print the JSON string representation of the object
print(Hl7V2StoreMetrics.to_json())

# convert the object into a dict
hl7_v2_store_metrics_dict = hl7_v2_store_metrics_instance.to_dict()
# create an instance of Hl7V2StoreMetrics from a dict
hl7_v2_store_metrics_from_dict = Hl7V2StoreMetrics.from_dict(hl7_v2_store_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


