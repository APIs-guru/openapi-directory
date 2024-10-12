# ShareList

List response for get Shares.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The Url of next result page. | [optional] 
**value** | [**List[Share]**](Share.md) | Collection of items of type DataTransferObjects. | 

## Example

```python
from openapi_client.models.share_list import ShareList

# TODO update the JSON string below
json = "{}"
# create an instance of ShareList from a JSON string
share_list_instance = ShareList.from_json(json)
# print the JSON string representation of the object
print(ShareList.to_json())

# convert the object into a dict
share_list_dict = share_list_instance.to_dict()
# create an instance of ShareList from a dict
share_list_from_dict = ShareList.from_dict(share_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


