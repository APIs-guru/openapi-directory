# CdcStrategy

The strategy that the stream uses for CDC replication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**most_recent_start_position** | **object** | CDC strategy to start replicating from the most recent position in the source. | [optional] 
**next_available_start_position** | **object** | CDC strategy to resume replication from the next available position in the source. | [optional] 
**specific_start_position** | [**SpecificStartPosition**](SpecificStartPosition.md) |  | [optional] 

## Example

```python
from openapi_client.models.cdc_strategy import CdcStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of CdcStrategy from a JSON string
cdc_strategy_instance = CdcStrategy.from_json(json)
# print the JSON string representation of the object
print(CdcStrategy.to_json())

# convert the object into a dict
cdc_strategy_dict = cdc_strategy_instance.to_dict()
# create an instance of CdcStrategy from a dict
cdc_strategy_from_dict = CdcStrategy.from_dict(cdc_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


