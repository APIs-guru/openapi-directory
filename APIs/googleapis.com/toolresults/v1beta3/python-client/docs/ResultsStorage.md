# ResultsStorage

The storage for test results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results_storage_path** | [**FileReference**](FileReference.md) |  | [optional] 
**xunit_xml_file** | [**FileReference**](FileReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.results_storage import ResultsStorage

# TODO update the JSON string below
json = "{}"
# create an instance of ResultsStorage from a JSON string
results_storage_instance = ResultsStorage.from_json(json)
# print the JSON string representation of the object
print(ResultsStorage.to_json())

# convert the object into a dict
results_storage_dict = results_storage_instance.to_dict()
# create an instance of ResultsStorage from a dict
results_storage_from_dict = ResultsStorage.from_dict(results_storage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


