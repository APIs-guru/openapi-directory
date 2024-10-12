# RegionListByService200Response

Lists Regions operation response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[RegionListByService200ResponseValueInner]**](RegionListByService200ResponseValueInner.md) | Lists of Regions. | [optional] 

## Example

```python
from openapi_client.models.region_list_by_service200_response import RegionListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of RegionListByService200Response from a JSON string
region_list_by_service200_response_instance = RegionListByService200Response.from_json(json)
# print the JSON string representation of the object
print(RegionListByService200Response.to_json())

# convert the object into a dict
region_list_by_service200_response_dict = region_list_by_service200_response_instance.to_dict()
# create an instance of RegionListByService200Response from a dict
region_list_by_service200_response_from_dict = RegionListByService200Response.from_dict(region_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


