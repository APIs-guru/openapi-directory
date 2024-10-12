# BatchCreateOccurrencesRequest

Request to create occurrences in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrences** | [**List[Occurrence]**](Occurrence.md) | Required. The occurrences to create. Max allowed length is 1000. | [optional] 

## Example

```python
from openapi_client.models.batch_create_occurrences_request import BatchCreateOccurrencesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateOccurrencesRequest from a JSON string
batch_create_occurrences_request_instance = BatchCreateOccurrencesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateOccurrencesRequest.to_json())

# convert the object into a dict
batch_create_occurrences_request_dict = batch_create_occurrences_request_instance.to_dict()
# create an instance of BatchCreateOccurrencesRequest from a dict
batch_create_occurrences_request_from_dict = BatchCreateOccurrencesRequest.from_dict(batch_create_occurrences_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


