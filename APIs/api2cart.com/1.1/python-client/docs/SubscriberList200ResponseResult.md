# SubscriberList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscribers** | [**List[Subscriber]**](Subscriber.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.subscriber_list200_response_result import SubscriberList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriberList200ResponseResult from a JSON string
subscriber_list200_response_result_instance = SubscriberList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(SubscriberList200ResponseResult.to_json())

# convert the object into a dict
subscriber_list200_response_result_dict = subscriber_list200_response_result_instance.to_dict()
# create an instance of SubscriberList200ResponseResult from a dict
subscriber_list200_response_result_from_dict = SubscriberList200ResponseResult.from_dict(subscriber_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


