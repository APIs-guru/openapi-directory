# GdataObjectId

This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | The name of the bucket to which this object belongs. | [optional] 
**generation** | **str** | Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions | [optional] 
**object_name** | **str** | The name of the object. | [optional] 

## Example

```python
from openapi_client.models.gdata_object_id import GdataObjectId

# TODO update the JSON string below
json = "{}"
# create an instance of GdataObjectId from a JSON string
gdata_object_id_instance = GdataObjectId.from_json(json)
# print the JSON string representation of the object
print(GdataObjectId.to_json())

# convert the object into a dict
gdata_object_id_dict = gdata_object_id_instance.to_dict()
# create an instance of GdataObjectId from a dict
gdata_object_id_from_dict = GdataObjectId.from_dict(gdata_object_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


