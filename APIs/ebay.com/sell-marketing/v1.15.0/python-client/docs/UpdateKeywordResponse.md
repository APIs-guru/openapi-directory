# UpdateKeywordResponse

A type that contains the fields for the <b>UpdateKeyword</b> response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Error]**](Error.md) | This container will be returned if there are one or more issues associated with modifying the corresponding keyword. | [optional] 
**keyword_id** | **str** | This field identifies the keyword that the seller updated, or attempted to update. | [optional] 
**status_code** | **int** | An HTTP status code is returned for each keyword to indicate the success or failure of updating that keyword. | [optional] 

## Example

```python
from openapi_client.models.update_keyword_response import UpdateKeywordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateKeywordResponse from a JSON string
update_keyword_response_instance = UpdateKeywordResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateKeywordResponse.to_json())

# convert the object into a dict
update_keyword_response_dict = update_keyword_response_instance.to_dict()
# create an instance of UpdateKeywordResponse from a dict
update_keyword_response_from_dict = UpdateKeywordResponse.from_dict(update_keyword_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


