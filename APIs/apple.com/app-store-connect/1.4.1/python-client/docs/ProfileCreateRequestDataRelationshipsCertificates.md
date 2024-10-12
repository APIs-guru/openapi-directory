# ProfileCreateRequestDataRelationshipsCertificates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ProfileRelationshipsCertificatesDataInner]**](ProfileRelationshipsCertificatesDataInner.md) |  | 

## Example

```python
from openapi_client.models.profile_create_request_data_relationships_certificates import ProfileCreateRequestDataRelationshipsCertificates

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCreateRequestDataRelationshipsCertificates from a JSON string
profile_create_request_data_relationships_certificates_instance = ProfileCreateRequestDataRelationshipsCertificates.from_json(json)
# print the JSON string representation of the object
print(ProfileCreateRequestDataRelationshipsCertificates.to_json())

# convert the object into a dict
profile_create_request_data_relationships_certificates_dict = profile_create_request_data_relationships_certificates_instance.to_dict()
# create an instance of ProfileCreateRequestDataRelationshipsCertificates from a dict
profile_create_request_data_relationships_certificates_from_dict = ProfileCreateRequestDataRelationshipsCertificates.from_dict(profile_create_request_data_relationships_certificates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


