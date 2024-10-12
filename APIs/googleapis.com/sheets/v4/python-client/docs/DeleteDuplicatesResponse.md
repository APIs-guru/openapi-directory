# DeleteDuplicatesResponse

The result of removing duplicates in a range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duplicates_removed_count** | **int** | The number of duplicate rows removed. | [optional] 

## Example

```python
from openapi_client.models.delete_duplicates_response import DeleteDuplicatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDuplicatesResponse from a JSON string
delete_duplicates_response_instance = DeleteDuplicatesResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteDuplicatesResponse.to_json())

# convert the object into a dict
delete_duplicates_response_dict = delete_duplicates_response_instance.to_dict()
# create an instance of DeleteDuplicatesResponse from a dict
delete_duplicates_response_from_dict = DeleteDuplicatesResponse.from_dict(delete_duplicates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


