# CreateConsumerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Consumer**](Consumer.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_consumer_response import CreateConsumerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateConsumerResponse from a JSON string
create_consumer_response_instance = CreateConsumerResponse.from_json(json)
# print the JSON string representation of the object
print(CreateConsumerResponse.to_json())

# convert the object into a dict
create_consumer_response_dict = create_consumer_response_instance.to_dict()
# create an instance of CreateConsumerResponse from a dict
create_consumer_response_from_dict = CreateConsumerResponse.from_dict(create_consumer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


