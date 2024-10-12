# GdataObjectId

gdata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | gdata | [optional] 
**generation** | **str** | gdata | [optional] 
**object_name** | **str** | gdata | [optional] 

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


