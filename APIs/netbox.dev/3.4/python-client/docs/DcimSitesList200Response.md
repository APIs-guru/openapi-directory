# DcimSitesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Site]**](Site.md) |  | 

## Example

```python
from openapi_client.models.dcim_sites_list200_response import DcimSitesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimSitesList200Response from a JSON string
dcim_sites_list200_response_instance = DcimSitesList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimSitesList200Response.to_json())

# convert the object into a dict
dcim_sites_list200_response_dict = dcim_sites_list200_response_instance.to_dict()
# create an instance of DcimSitesList200Response from a dict
dcim_sites_list200_response_from_dict = DcimSitesList200Response.from_dict(dcim_sites_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


