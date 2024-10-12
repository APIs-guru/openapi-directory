# ListAudienceExportsResponse

A list of all audience exports for a property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience_exports** | [**List[AudienceExport]**](AudienceExport.md) | Each audience export for a property. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_audience_exports_response import ListAudienceExportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAudienceExportsResponse from a JSON string
list_audience_exports_response_instance = ListAudienceExportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAudienceExportsResponse.to_json())

# convert the object into a dict
list_audience_exports_response_dict = list_audience_exports_response_instance.to_dict()
# create an instance of ListAudienceExportsResponse from a dict
list_audience_exports_response_from_dict = ListAudienceExportsResponse.from_dict(list_audience_exports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


