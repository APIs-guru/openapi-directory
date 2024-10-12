# DeleteConsumerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeleteConsumerResponseData**](DeleteConsumerResponseData.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.delete_consumer_response import DeleteConsumerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteConsumerResponse from a JSON string
delete_consumer_response_instance = DeleteConsumerResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteConsumerResponse.to_json())

# convert the object into a dict
delete_consumer_response_dict = delete_consumer_response_instance.to_dict()
# create an instance of DeleteConsumerResponse from a dict
delete_consumer_response_from_dict = DeleteConsumerResponse.from_dict(delete_consumer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


