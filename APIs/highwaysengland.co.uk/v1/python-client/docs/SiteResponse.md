# SiteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_count** | **int** |  | [optional] 
**sites** | [**List[SiteResult]**](SiteResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.site_response import SiteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SiteResponse from a JSON string
site_response_instance = SiteResponse.from_json(json)
# print the JSON string representation of the object
print(SiteResponse.to_json())

# convert the object into a dict
site_response_dict = site_response_instance.to_dict()
# create an instance of SiteResponse from a dict
site_response_from_dict = SiteResponse.from_dict(site_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


