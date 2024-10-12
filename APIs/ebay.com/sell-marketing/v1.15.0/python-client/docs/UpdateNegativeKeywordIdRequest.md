# UpdateNegativeKeywordIdRequest

A type that defines the fields used to update a negative keyword.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative_keyword_id** | **str** | A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. | [optional] 
**negative_keyword_status** | **str** | A field that defines the status of the negative keyword. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:NegativeKeywordStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.update_negative_keyword_id_request import UpdateNegativeKeywordIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNegativeKeywordIdRequest from a JSON string
update_negative_keyword_id_request_instance = UpdateNegativeKeywordIdRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNegativeKeywordIdRequest.to_json())

# convert the object into a dict
update_negative_keyword_id_request_dict = update_negative_keyword_id_request_instance.to_dict()
# create an instance of UpdateNegativeKeywordIdRequest from a dict
update_negative_keyword_id_request_from_dict = UpdateNegativeKeywordIdRequest.from_dict(update_negative_keyword_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


