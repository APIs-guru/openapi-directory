# UpdateNegativeKeywordResponse

A type that contains the fields for the <b>UpdateNegativeKeyword</b> response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | A container that will be returned if there are one or more issues associated with modifying the corresponding negative keyword. | [optional] 
**negative_keyword_id** | **str** | A unique eBay-assigned ID for a negative keyword. This keyword ID will be generated for each successfully created negative keyword. | [optional] 
**status_code** | **int** | An HTTP status code that indicates the success or failure of updating that negative keyword. | [optional] 

## Example

```python
from openapi_client.models.update_negative_keyword_response import UpdateNegativeKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNegativeKeywordResponse from a JSON string
update_negative_keyword_response_instance = UpdateNegativeKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateNegativeKeywordResponse.to_json())

# convert the object into a dict
update_negative_keyword_response_dict = update_negative_keyword_response_instance.to_dict()
# create an instance of UpdateNegativeKeywordResponse from a dict
update_negative_keyword_response_from_dict = UpdateNegativeKeywordResponse.from_dict(update_negative_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


