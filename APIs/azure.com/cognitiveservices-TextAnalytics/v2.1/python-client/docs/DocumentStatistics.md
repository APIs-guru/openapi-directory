# DocumentStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characters_count** | **int** | Number of text elements recognized in the document. | [optional] 
**transactions_count** | **int** | Number of transactions for the document. | [optional] 

## Example

```python
from openapi_client.models.document_statistics import DocumentStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentStatistics from a JSON string
document_statistics_instance = DocumentStatistics.from_json(json)
# print the JSON string representation of the object
print(DocumentStatistics.to_json())

# convert the object into a dict
document_statistics_dict = document_statistics_instance.to_dict()
# create an instance of DocumentStatistics from a dict
document_statistics_from_dict = DocumentStatistics.from_dict(document_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


