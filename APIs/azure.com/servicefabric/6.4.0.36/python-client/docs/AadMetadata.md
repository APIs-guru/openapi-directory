# AadMetadata

Azure Active Directory metadata used for secured connection to cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **str** | The AAD authority url. | [optional] 
**client** | **str** | The AAD client application Id. | [optional] 
**cluster** | **str** | The AAD cluster application Id. | [optional] 
**login** | **str** | The AAD login url. | [optional] 
**redirect** | **str** | The client application redirect address. | [optional] 
**tenant** | **str** | The AAD tenant Id. | [optional] 

## Example

```python
from openapi_client.models.aad_metadata import AadMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of AadMetadata from a JSON string
aad_metadata_instance = AadMetadata.from_json(json)
# print the JSON string representation of the object
print(AadMetadata.to_json())

# convert the object into a dict
aad_metadata_dict = aad_metadata_instance.to_dict()
# create an instance of AadMetadata from a dict
aad_metadata_from_dict = AadMetadata.from_dict(aad_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


