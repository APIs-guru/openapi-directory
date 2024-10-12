# UpdateDataSourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**source** | [**DataSource**](DataSource.md) |  | [optional] 
**update_mask** | **str** | Only applies to [&#x60;settings.datasources.patch&#x60;](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: &#x60;name&#x60;, &#x60;displayName&#x60;. * If &#x60;update_mask&#x60; is non-empty, then only the fields specified in the &#x60;update_mask&#x60; are updated. * If you specify a field in the &#x60;update_mask&#x60;, but don&#39;t specify its value in the source, that field is cleared. * If the &#x60;update_mask&#x60; is not present or empty or has the value &#x60;*&#x60;, then all fields are updated. | [optional] 

## Example

```python
from openapi_client.models.update_data_source_request import UpdateDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDataSourceRequest from a JSON string
update_data_source_request_instance = UpdateDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDataSourceRequest.to_json())

# convert the object into a dict
update_data_source_request_dict = update_data_source_request_instance.to_dict()
# create an instance of UpdateDataSourceRequest from a dict
update_data_source_request_from_dict = UpdateDataSourceRequest.from_dict(update_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


