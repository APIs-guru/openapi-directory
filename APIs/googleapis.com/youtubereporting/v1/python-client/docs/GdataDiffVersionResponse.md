# GdataDiffVersionResponse

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_size_bytes** | **str** | gdata | [optional] 
**object_version** | **str** | gdata | [optional] 

## Example

```python
from openapi_client.models.gdata_diff_version_response import GdataDiffVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GdataDiffVersionResponse from a JSON string
gdata_diff_version_response_instance = GdataDiffVersionResponse.from_json(json)
# print the JSON string representation of the object
print(GdataDiffVersionResponse.to_json())

# convert the object into a dict
gdata_diff_version_response_dict = gdata_diff_version_response_instance.to_dict()
# create an instance of GdataDiffVersionResponse from a dict
gdata_diff_version_response_from_dict = GdataDiffVersionResponse.from_dict(gdata_diff_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


