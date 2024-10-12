# ListMethodQuotasResponse

Response message for the ListMethodQuotas method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method_quotas** | [**List[MethodQuota]**](MethodQuota.md) | The current quota usage and limits per each method. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_method_quotas_response import ListMethodQuotasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMethodQuotasResponse from a JSON string
list_method_quotas_response_instance = ListMethodQuotasResponse.from_json(json)
# print the JSON string representation of the object
print(ListMethodQuotasResponse.to_json())

# convert the object into a dict
list_method_quotas_response_dict = list_method_quotas_response_instance.to_dict()
# create an instance of ListMethodQuotasResponse from a dict
list_method_quotas_response_from_dict = ListMethodQuotasResponse.from_dict(list_method_quotas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


