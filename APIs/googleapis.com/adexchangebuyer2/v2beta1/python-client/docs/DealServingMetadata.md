# DealServingMetadata

Message captures metadata about the serving status of a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_pause_status** | [**DealPauseStatus**](DealPauseStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.deal_serving_metadata import DealServingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DealServingMetadata from a JSON string
deal_serving_metadata_instance = DealServingMetadata.from_json(json)
# print the JSON string representation of the object
print(DealServingMetadata.to_json())

# convert the object into a dict
deal_serving_metadata_dict = deal_serving_metadata_instance.to_dict()
# create an instance of DealServingMetadata from a dict
deal_serving_metadata_from_dict = DealServingMetadata.from_dict(deal_serving_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


