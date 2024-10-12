# GetConsumerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Consumer**](Consumer.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_consumer_response import GetConsumerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConsumerResponse from a JSON string
get_consumer_response_instance = GetConsumerResponse.from_json(json)
# print the JSON string representation of the object
print(GetConsumerResponse.to_json())

# convert the object into a dict
get_consumer_response_dict = get_consumer_response_instance.to_dict()
# create an instance of GetConsumerResponse from a dict
get_consumer_response_from_dict = GetConsumerResponse.from_dict(get_consumer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


