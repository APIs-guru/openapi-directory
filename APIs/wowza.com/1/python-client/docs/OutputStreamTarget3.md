# OutputStreamTarget3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_target_id** | **str** | The unique alphanumeric string that identifies the stream target. | 
**use_stream_target_backup_url** | **bool** | Specifies whether to use the stream target&#39;s primary or backup URL. | [optional] 

## Example

```python
from openapi_client.models.output_stream_target3 import OutputStreamTarget3

# TODO update the JSON string below
json = "{}"
# create an instance of OutputStreamTarget3 from a JSON string
output_stream_target3_instance = OutputStreamTarget3.from_json(json)
# print the JSON string representation of the object
print(OutputStreamTarget3.to_json())

# convert the object into a dict
output_stream_target3_dict = output_stream_target3_instance.to_dict()
# create an instance of OutputStreamTarget3 from a dict
output_stream_target3_from_dict = OutputStreamTarget3.from_dict(output_stream_target3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


