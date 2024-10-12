# SiteResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.site_result import SiteResult

# TODO update the JSON string below
json = "{}"
# create an instance of SiteResult from a JSON string
site_result_instance = SiteResult.from_json(json)
# print the JSON string representation of the object
print(SiteResult.to_json())

# convert the object into a dict
site_result_dict = site_result_instance.to_dict()
# create an instance of SiteResult from a dict
site_result_from_dict = SiteResult.from_dict(site_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


