# Reader

A reader of a publication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the publication reader was created and associated with a Google user. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the reader. The last part of ppid in the resource name is the publisher provided id. | [optional] [readonly] 

## Example

```python
from openapi_client.models.reader import Reader

# TODO update the JSON string below
json = "{}"
# create an instance of Reader from a JSON string
reader_instance = Reader.from_json(json)
# print the JSON string representation of the object
print(Reader.to_json())

# convert the object into a dict
reader_dict = reader_instance.to_dict()
# create an instance of Reader from a dict
reader_from_dict = Reader.from_dict(reader_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


