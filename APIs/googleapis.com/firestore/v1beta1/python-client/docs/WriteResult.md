# WriteResult

The result of applying a write.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transform_results** | [**List[Value]**](Value.md) | The results of applying each DocumentTransform.FieldTransform, in the same order. | [optional] 
**update_time** | **str** | The last update time of the document after applying the write. Not set after a &#x60;delete&#x60;. If the write did not actually change the document, this will be the previous update_time. | [optional] 

## Example

```python
from openapi_client.models.write_result import WriteResult

# TODO update the JSON string below
json = "{}"
# create an instance of WriteResult from a JSON string
write_result_instance = WriteResult.from_json(json)
# print the JSON string representation of the object
print(WriteResult.to_json())

# convert the object into a dict
write_result_dict = write_result_instance.to_dict()
# create an instance of WriteResult from a dict
write_result_from_dict = WriteResult.from_dict(write_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


