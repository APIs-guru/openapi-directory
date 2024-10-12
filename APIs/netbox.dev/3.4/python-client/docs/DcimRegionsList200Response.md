# DcimRegionsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Region]**](Region.md) |  | 

## Example

```python
from openapi_client.models.dcim_regions_list200_response import DcimRegionsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimRegionsList200Response from a JSON string
dcim_regions_list200_response_instance = DcimRegionsList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimRegionsList200Response.to_json())

# convert the object into a dict
dcim_regions_list200_response_dict = dcim_regions_list200_response_instance.to_dict()
# create an instance of DcimRegionsList200Response from a dict
dcim_regions_list200_response_from_dict = DcimRegionsList200Response.from_dict(dcim_regions_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


