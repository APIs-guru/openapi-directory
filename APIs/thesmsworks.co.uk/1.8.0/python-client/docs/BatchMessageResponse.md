# BatchMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchid** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.batch_message_response import BatchMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchMessageResponse from a JSON string
batch_message_response_instance = BatchMessageResponse.from_json(json)
# print the JSON string representation of the object
print(BatchMessageResponse.to_json())

# convert the object into a dict
batch_message_response_dict = batch_message_response_instance.to_dict()
# create an instance of BatchMessageResponse from a dict
batch_message_response_from_dict = BatchMessageResponse.from_dict(batch_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


