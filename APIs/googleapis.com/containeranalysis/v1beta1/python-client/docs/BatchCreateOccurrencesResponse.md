# BatchCreateOccurrencesResponse

Response for creating occurrences in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**occurrences** | [**List[Occurrence]**](Occurrence.md) | The occurrences that were created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_occurrences_response import BatchCreateOccurrencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateOccurrencesResponse from a JSON string
batch_create_occurrences_response_instance = BatchCreateOccurrencesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateOccurrencesResponse.to_json())

# convert the object into a dict
batch_create_occurrences_response_dict = batch_create_occurrences_response_instance.to_dict()
# create an instance of BatchCreateOccurrencesResponse from a dict
batch_create_occurrences_response_from_dict = BatchCreateOccurrencesResponse.from_dict(batch_create_occurrences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


