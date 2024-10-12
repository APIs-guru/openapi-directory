# BatchDeletePhotosResponse

Response to batch delete of one or more Photos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**List[Status]**](Status.md) | The status for the operation to delete a single Photo in the batch request. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_photos_response import BatchDeletePhotosResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePhotosResponse from a JSON string
batch_delete_photos_response_instance = BatchDeletePhotosResponse.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePhotosResponse.to_json())

# convert the object into a dict
batch_delete_photos_response_dict = batch_delete_photos_response_instance.to_dict()
# create an instance of BatchDeletePhotosResponse from a dict
batch_delete_photos_response_from_dict = BatchDeletePhotosResponse.from_dict(batch_delete_photos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


