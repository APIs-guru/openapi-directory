# AadMetadataObject

Azure Active Directory metadata object used for secured connection to cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**AadMetadata**](AadMetadata.md) |  | [optional] 
**type** | **str** | The client authentication method. | [optional] 

## Example

```python
from openapi_client.models.aad_metadata_object import AadMetadataObject

# TODO update the JSON string below
json = "{}"
# create an instance of AadMetadataObject from a JSON string
aad_metadata_object_instance = AadMetadataObject.from_json(json)
# print the JSON string representation of the object
print(AadMetadataObject.to_json())

# convert the object into a dict
aad_metadata_object_dict = aad_metadata_object_instance.to_dict()
# create an instance of AadMetadataObject from a dict
aad_metadata_object_from_dict = AadMetadataObject.from_dict(aad_metadata_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


