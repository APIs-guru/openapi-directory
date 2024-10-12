# BiEngineReason

Reason why BI Engine didn't accelerate the query (or sub-query).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Output only. High-level BI Engine reason for partial or disabled acceleration | [optional] [readonly] 
**message** | **str** | Output only. Free form human-readable reason for partial or disabled acceleration. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bi_engine_reason import BiEngineReason

# TODO update the JSON string below
json = "{}"
# create an instance of BiEngineReason from a JSON string
bi_engine_reason_instance = BiEngineReason.from_json(json)
# print the JSON string representation of the object
print(BiEngineReason.to_json())

# convert the object into a dict
bi_engine_reason_dict = bi_engine_reason_instance.to_dict()
# create an instance of BiEngineReason from a dict
bi_engine_reason_from_dict = BiEngineReason.from_dict(bi_engine_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


