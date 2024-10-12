# DcimSiteGroupsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[SiteGroup]**](SiteGroup.md) |  | 

## Example

```python
from openapi_client.models.dcim_site_groups_list200_response import DcimSiteGroupsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimSiteGroupsList200Response from a JSON string
dcim_site_groups_list200_response_instance = DcimSiteGroupsList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimSiteGroupsList200Response.to_json())

# convert the object into a dict
dcim_site_groups_list200_response_dict = dcim_site_groups_list200_response_instance.to_dict()
# create an instance of DcimSiteGroupsList200Response from a dict
dcim_site_groups_list200_response_from_dict = DcimSiteGroupsList200Response.from_dict(dcim_site_groups_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


