# ArchivedResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot** | [**Snapshot**](Snapshot.md) |  | 
**tag** | **str** | The user-supplied tag for use in collation | [optional] 
**timestamp** | **str** | The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format | 
**url** | **str** | The URL requested | 

## Example

```python
from openapi_client.models.archived_result import ArchivedResult

# TODO update the JSON string below
json = "{}"
# create an instance of ArchivedResult from a JSON string
archived_result_instance = ArchivedResult.from_json(json)
# print the JSON string representation of the object
print(ArchivedResult.to_json())

# convert the object into a dict
archived_result_dict = archived_result_instance.to_dict()
# create an instance of ArchivedResult from a dict
archived_result_from_dict = ArchivedResult.from_dict(archived_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


