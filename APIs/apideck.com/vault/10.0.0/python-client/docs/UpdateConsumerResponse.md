# UpdateConsumerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Consumer**](Consumer.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.update_consumer_response import UpdateConsumerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConsumerResponse from a JSON string
update_consumer_response_instance = UpdateConsumerResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateConsumerResponse.to_json())

# convert the object into a dict
update_consumer_response_dict = update_consumer_response_instance.to_dict()
# create an instance of UpdateConsumerResponse from a dict
update_consumer_response_from_dict = UpdateConsumerResponse.from_dict(update_consumer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


