# RequestStatistics

if showStats=true was specified in the request this field will contain information about the request payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents_count** | **int** | Number of documents submitted in the request. | 
**erroneous_documents_count** | **int** | Number of invalid documents. This includes empty, over-size limit or non-supported languages documents. | 
**transactions_count** | **int** | Number of transactions for the request. | 
**valid_documents_count** | **int** | Number of valid documents. This excludes empty, over-size limit or non-supported languages documents. | 

## Example

```python
from openapi_client.models.request_statistics import RequestStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of RequestStatistics from a JSON string
request_statistics_instance = RequestStatistics.from_json(json)
# print the JSON string representation of the object
print(RequestStatistics.to_json())

# convert the object into a dict
request_statistics_dict = request_statistics_instance.to_dict()
# create an instance of RequestStatistics from a dict
request_statistics_from_dict = RequestStatistics.from_dict(request_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


