# ShareMessageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the message. | [optional] 
**type** | **str** | Type is message.  | [optional] 

## Example

```python
from openapi_client.models.share_message_data import ShareMessageData

# TODO update the JSON string below
json = "{}"
# create an instance of ShareMessageData from a JSON string
share_message_data_instance = ShareMessageData.from_json(json)
# print the JSON string representation of the object
print(ShareMessageData.to_json())

# convert the object into a dict
share_message_data_dict = share_message_data_instance.to_dict()
# create an instance of ShareMessageData from a dict
share_message_data_from_dict = ShareMessageData.from_dict(share_message_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


