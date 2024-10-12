# LoggerCollection

Paged Logger list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[LoggerContract]**](LoggerContract.md) | Logger values. | [optional] 

## Example

```python
from openapi_client.models.logger_collection import LoggerCollection

# TODO update the JSON string below
json = "{}"
# create an instance of LoggerCollection from a JSON string
logger_collection_instance = LoggerCollection.from_json(json)
# print the JSON string representation of the object
print(LoggerCollection.to_json())

# convert the object into a dict
logger_collection_dict = logger_collection_instance.to_dict()
# create an instance of LoggerCollection from a dict
logger_collection_from_dict = LoggerCollection.from_dict(logger_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


