# ListLunsResponse

Response message containing the list of storage volume luns.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**luns** | [**List[Lun]**](Lun.md) | The list of luns. | [optional] 
**next_page_token** | **str** | A token identifying a page of results from the server. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_luns_response import ListLunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLunsResponse from a JSON string
list_luns_response_instance = ListLunsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLunsResponse.to_json())

# convert the object into a dict
list_luns_response_dict = list_luns_response_instance.to_dict()
# create an instance of ListLunsResponse from a dict
list_luns_response_from_dict = ListLunsResponse.from_dict(list_luns_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


