# GcsObject

Cloud Storage object representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | Required. Bucket of the Cloud Storage object. | [optional] 
**generation_number** | **str** | Required. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. | [optional] 
**object** | **str** | Required. Name of the Cloud Storage object. | [optional] 

## Example

```python
from openapi_client.models.gcs_object import GcsObject

# TODO update the JSON string below
json = "{}"
# create an instance of GcsObject from a JSON string
gcs_object_instance = GcsObject.from_json(json)
# print the JSON string representation of the object
print(GcsObject.to_json())

# convert the object into a dict
gcs_object_dict = gcs_object_instance.to_dict()
# create an instance of GcsObject from a dict
gcs_object_from_dict = GcsObject.from_dict(gcs_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


