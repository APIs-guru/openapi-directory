# MessagePartHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the header before the &#x60;:&#x60; separator. For example, &#x60;To&#x60;. | [optional] 
**value** | **str** | The value of the header after the &#x60;:&#x60; separator. For example, &#x60;someuser@example.com&#x60;. | [optional] 

## Example

```python
from openapi_client.models.message_part_header import MessagePartHeader

# TODO update the JSON string below
json = "{}"
# create an instance of MessagePartHeader from a JSON string
message_part_header_instance = MessagePartHeader.from_json(json)
# print the JSON string representation of the object
print(MessagePartHeader.to_json())

# convert the object into a dict
message_part_header_dict = message_part_header_instance.to_dict()
# create an instance of MessagePartHeader from a dict
message_part_header_from_dict = MessagePartHeader.from_dict(message_part_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


