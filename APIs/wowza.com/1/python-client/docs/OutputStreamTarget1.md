# OutputStreamTarget1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stream_target_id** | **str** | The unique alphanumeric string that identifies the stream target. | 
**use_stream_target_backup_url** | **bool** | Use the target&#39;s backup URL. Not available for targets whose &lt;em&gt;provider&lt;/em&gt; is &lt;strong&gt;akamai_cupertino&lt;/strong&gt;. The default is &lt;strong&gt;false&lt;/strong&gt;. | [optional] 

## Example

```python
from openapi_client.models.output_stream_target1 import OutputStreamTarget1

# TODO update the JSON string below
json = "{}"
# create an instance of OutputStreamTarget1 from a JSON string
output_stream_target1_instance = OutputStreamTarget1.from_json(json)
# print the JSON string representation of the object
print(OutputStreamTarget1.to_json())

# convert the object into a dict
output_stream_target1_dict = output_stream_target1_instance.to_dict()
# create an instance of OutputStreamTarget1 from a dict
output_stream_target1_from_dict = OutputStreamTarget1.from_dict(output_stream_target1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


