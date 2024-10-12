# ProfileRelationshipsCertificates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ProfileRelationshipsCertificatesDataInner]**](ProfileRelationshipsCertificatesDataInner.md) |  | [optional] 
**links** | [**AppRelationshipsAppInfosLinks**](AppRelationshipsAppInfosLinks.md) |  | [optional] 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.profile_relationships_certificates import ProfileRelationshipsCertificates

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileRelationshipsCertificates from a JSON string
profile_relationships_certificates_instance = ProfileRelationshipsCertificates.from_json(json)
# print the JSON string representation of the object
print(ProfileRelationshipsCertificates.to_json())

# convert the object into a dict
profile_relationships_certificates_dict = profile_relationships_certificates_instance.to_dict()
# create an instance of ProfileRelationshipsCertificates from a dict
profile_relationships_certificates_from_dict = ProfileRelationshipsCertificates.from_dict(profile_relationships_certificates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


