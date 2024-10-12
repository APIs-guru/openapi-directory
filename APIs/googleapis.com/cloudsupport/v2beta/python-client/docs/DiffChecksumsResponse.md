# DiffChecksumsResponse

# gdata.* are outside protos with mising documentation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checksums_location** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**chunk_size_bytes** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**object_location** | [**CompositeMedia**](CompositeMedia.md) |  | [optional] 
**object_size_bytes** | **str** | # gdata.* are outside protos with mising documentation | [optional] 
**object_version** | **str** | # gdata.* are outside protos with mising documentation | [optional] 

## Example

```python
from openapi_client.models.diff_checksums_response import DiffChecksumsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DiffChecksumsResponse from a JSON string
diff_checksums_response_instance = DiffChecksumsResponse.from_json(json)
# print the JSON string representation of the object
print(DiffChecksumsResponse.to_json())

# convert the object into a dict
diff_checksums_response_dict = diff_checksums_response_instance.to_dict()
# create an instance of DiffChecksumsResponse from a dict
diff_checksums_response_from_dict = DiffChecksumsResponse.from_dict(diff_checksums_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


