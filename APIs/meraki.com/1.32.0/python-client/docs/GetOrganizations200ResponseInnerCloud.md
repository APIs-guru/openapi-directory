# GetOrganizations200ResponseInnerCloud

Data for this organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region** | [**GetOrganizations200ResponseInnerCloudRegion**](GetOrganizations200ResponseInnerCloudRegion.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organizations200_response_inner_cloud import GetOrganizations200ResponseInnerCloud

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizations200ResponseInnerCloud from a JSON string
get_organizations200_response_inner_cloud_instance = GetOrganizations200ResponseInnerCloud.from_json(json)
# print the JSON string representation of the object
print(GetOrganizations200ResponseInnerCloud.to_json())

# convert the object into a dict
get_organizations200_response_inner_cloud_dict = get_organizations200_response_inner_cloud_instance.to_dict()
# create an instance of GetOrganizations200ResponseInnerCloud from a dict
get_organizations200_response_inner_cloud_from_dict = GetOrganizations200ResponseInnerCloud.from_dict(get_organizations200_response_inner_cloud_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


