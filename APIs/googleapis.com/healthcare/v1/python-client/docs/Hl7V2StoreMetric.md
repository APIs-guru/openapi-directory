# Hl7V2StoreMetric

Count of messages and total storage size by type for a given HL7 store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The total count of HL7v2 messages in the store for the given message type. | [optional] 
**message_type** | **str** | The Hl7v2 message type this metric applies to, such as &#x60;ADT&#x60; or &#x60;ORU&#x60;. | [optional] 
**structured_storage_size_bytes** | **str** | The total amount of structured storage used by HL7v2 messages of this message type in the store. | [optional] 

## Example

```python
from openapi_client.models.hl7_v2_store_metric import Hl7V2StoreMetric

# TODO update the JSON string below
json = "{}"
# create an instance of Hl7V2StoreMetric from a JSON string
hl7_v2_store_metric_instance = Hl7V2StoreMetric.from_json(json)
# print the JSON string representation of the object
print(Hl7V2StoreMetric.to_json())

# convert the object into a dict
hl7_v2_store_metric_dict = hl7_v2_store_metric_instance.to_dict()
# create an instance of Hl7V2StoreMetric from a dict
hl7_v2_store_metric_from_dict = Hl7V2StoreMetric.from_dict(hl7_v2_store_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


