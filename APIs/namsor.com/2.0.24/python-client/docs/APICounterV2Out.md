# APICounterV2Out

Detailed usage as reported by the deduplicating API counter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | [**APIKeyOut**](APIKeyOut.md) |  | [optional] 
**api_service** | **str** | The apiService corresponds to the classifier name. | [optional] 
**created_date_time** | **int** | The create datetime of the counter. | [optional] 
**host_address** | **str** | The processing hostAddress. | [optional] 
**last_flushed_date_time** | **int** | The flush datetime of the counter. | [optional] 
**last_used_date_time** | **int** | The last usage datetime of the counter. | [optional] 
**service_features_usage** | **Dict[str, int]** | Usage of special features, such as Chinese, Japanese. | [optional] 
**total_usage** | **int** | The usage of the counter. | [optional] 

## Example

```python
from openapi_client.models.api_counter_v2_out import APICounterV2Out

# TODO update the JSON string below
json = "{}"
# create an instance of APICounterV2Out from a JSON string
api_counter_v2_out_instance = APICounterV2Out.from_json(json)
# print the JSON string representation of the object
print(APICounterV2Out.to_json())

# convert the object into a dict
api_counter_v2_out_dict = api_counter_v2_out_instance.to_dict()
# create an instance of APICounterV2Out from a dict
api_counter_v2_out_from_dict = APICounterV2Out.from_dict(api_counter_v2_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


