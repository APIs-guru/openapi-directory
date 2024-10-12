# ListDeliveryUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[DeliveryReport]**](DeliveryReport.md) |  | [optional] 
**limit** | **int** | Number of assets returned in this response. Default value is 100. | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_delivery_usage_response import ListDeliveryUsageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeliveryUsageResponse from a JSON string
list_delivery_usage_response_instance = ListDeliveryUsageResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeliveryUsageResponse.to_json())

# convert the object into a dict
list_delivery_usage_response_dict = list_delivery_usage_response_instance.to_dict()
# create an instance of ListDeliveryUsageResponse from a dict
list_delivery_usage_response_from_dict = ListDeliveryUsageResponse.from_dict(list_delivery_usage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


