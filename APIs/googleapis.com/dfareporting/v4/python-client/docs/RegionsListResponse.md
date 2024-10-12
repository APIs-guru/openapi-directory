# RegionsListResponse

Region List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#regionsListResponse\&quot;. | [optional] 
**regions** | [**List[Region]**](Region.md) | Region collection. | [optional] 

## Example

```python
from openapi_client.models.regions_list_response import RegionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegionsListResponse from a JSON string
regions_list_response_instance = RegionsListResponse.from_json(json)
# print the JSON string representation of the object
print(RegionsListResponse.to_json())

# convert the object into a dict
regions_list_response_dict = regions_list_response_instance.to_dict()
# create an instance of RegionsListResponse from a dict
regions_list_response_from_dict = RegionsListResponse.from_dict(regions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


