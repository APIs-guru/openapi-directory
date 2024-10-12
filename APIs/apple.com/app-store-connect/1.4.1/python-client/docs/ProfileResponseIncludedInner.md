# ProfileResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**CertificateAttributes**](CertificateAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**BundleIdRelationships**](BundleIdRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.profile_response_included_inner import ProfileResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileResponseIncludedInner from a JSON string
profile_response_included_inner_instance = ProfileResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(ProfileResponseIncludedInner.to_json())

# convert the object into a dict
profile_response_included_inner_dict = profile_response_included_inner_instance.to_dict()
# create an instance of ProfileResponseIncludedInner from a dict
profile_response_included_inner_from_dict = ProfileResponseIncludedInner.from_dict(profile_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


