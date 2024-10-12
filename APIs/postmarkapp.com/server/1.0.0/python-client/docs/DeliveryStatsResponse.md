# DeliveryStatsResponse



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounces** | [**List[BounceCountElement]**](BounceCountElement.md) |  | [optional] 
**inactive_mails** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.delivery_stats_response import DeliveryStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryStatsResponse from a JSON string
delivery_stats_response_instance = DeliveryStatsResponse.from_json(json)
# print the JSON string representation of the object
print(DeliveryStatsResponse.to_json())

# convert the object into a dict
delivery_stats_response_dict = delivery_stats_response_instance.to_dict()
# create an instance of DeliveryStatsResponse from a dict
delivery_stats_response_from_dict = DeliveryStatsResponse.from_dict(delivery_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


