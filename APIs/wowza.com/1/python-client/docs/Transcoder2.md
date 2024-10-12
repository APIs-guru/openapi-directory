# Transcoder2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recordings** | [**List[Recording]**](Recording.md) | Array of recordings of this transcoder. See /recordings for more details. | [optional] 

## Example

```python
from openapi_client.models.transcoder2 import Transcoder2

# TODO update the JSON string below
json = "{}"
# create an instance of Transcoder2 from a JSON string
transcoder2_instance = Transcoder2.from_json(json)
# print the JSON string representation of the object
print(Transcoder2.to_json())

# convert the object into a dict
transcoder2_dict = transcoder2_instance.to_dict()
# create an instance of Transcoder2 from a dict
transcoder2_from_dict = Transcoder2.from_dict(transcoder2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


