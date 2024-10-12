# OutputStreamTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time that the output stream target was created. | [optional] 
**id** | **str** | The unique alphanumeric string that identifies the output stream target. | [optional] 
**output_id** | **str** | The unique alphanumeric string that identifies the output rendition. | [optional] 
**stream_target** | [**StreamTarget**](StreamTarget.md) |  | [optional] 
**stream_target_id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**updated_at** | **datetime** | The date and time that the output stream target was updated. | [optional] 
**use_stream_target_backup_url** | **bool** | Specifies whether to use the stream target&#39;s primary or backup URL. | [optional] 

## Example

```python
from openapi_client.models.output_stream_target import OutputStreamTarget

# TODO update the JSON string below
json = "{}"
# create an instance of OutputStreamTarget from a JSON string
output_stream_target_instance = OutputStreamTarget.from_json(json)
# print the JSON string representation of the object
print(OutputStreamTarget.to_json())

# convert the object into a dict
output_stream_target_dict = output_stream_target_instance.to_dict()
# create an instance of OutputStreamTarget from a dict
output_stream_target_from_dict = OutputStreamTarget.from_dict(output_stream_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


