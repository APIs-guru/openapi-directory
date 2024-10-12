# GetOrganizations200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | [**GetOrganizations200ResponseInnerApi**](GetOrganizations200ResponseInnerApi.md) |  | [optional] 
**cloud** | [**GetOrganizations200ResponseInnerCloud**](GetOrganizations200ResponseInnerCloud.md) |  | [optional] 
**id** | **str** | Organization ID | [optional] 
**licensing** | [**GetOrganizations200ResponseInnerLicensing**](GetOrganizations200ResponseInnerLicensing.md) |  | [optional] 
**management** | [**GetOrganizations200ResponseInnerManagement**](GetOrganizations200ResponseInnerManagement.md) |  | [optional] 
**name** | **str** | Organization name | [optional] 
**url** | **str** | Organization URL | [optional] 

## Example

```python
from openapi_client.models.get_organizations200_response_inner import GetOrganizations200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizations200ResponseInner from a JSON string
get_organizations200_response_inner_instance = GetOrganizations200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizations200ResponseInner.to_json())

# convert the object into a dict
get_organizations200_response_inner_dict = get_organizations200_response_inner_instance.to_dict()
# create an instance of GetOrganizations200ResponseInner from a dict
get_organizations200_response_inner_from_dict = GetOrganizations200ResponseInner.from_dict(get_organizations200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


