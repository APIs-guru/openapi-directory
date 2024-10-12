# SiteTypeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_count** | **int** |  | [optional] 
**sitetypes** | [**List[SiteType]**](SiteType.md) |  | [optional] 

## Example

```python
from openapi_client.models.site_type_response import SiteTypeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SiteTypeResponse from a JSON string
site_type_response_instance = SiteTypeResponse.from_json(json)
# print the JSON string representation of the object
print(SiteTypeResponse.to_json())

# convert the object into a dict
site_type_response_dict = site_type_response_instance.to_dict()
# create an instance of SiteTypeResponse from a dict
site_type_response_from_dict = SiteTypeResponse.from_dict(site_type_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


