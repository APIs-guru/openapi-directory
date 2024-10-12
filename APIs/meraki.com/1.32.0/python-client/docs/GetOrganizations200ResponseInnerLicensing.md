# GetOrganizations200ResponseInnerLicensing

Licensing related settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Organization licensing model. Can be &#39;co-term&#39;, &#39;per-device&#39;, or &#39;subscription&#39;. | [optional] 

## Example

```python
from openapi_client.models.get_organizations200_response_inner_licensing import GetOrganizations200ResponseInnerLicensing

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizations200ResponseInnerLicensing from a JSON string
get_organizations200_response_inner_licensing_instance = GetOrganizations200ResponseInnerLicensing.from_json(json)
# print the JSON string representation of the object
print(GetOrganizations200ResponseInnerLicensing.to_json())

# convert the object into a dict
get_organizations200_response_inner_licensing_dict = get_organizations200_response_inner_licensing_instance.to_dict()
# create an instance of GetOrganizations200ResponseInnerLicensing from a dict
get_organizations200_response_inner_licensing_from_dict = GetOrganizations200ResponseInnerLicensing.from_dict(get_organizations200_response_inner_licensing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


