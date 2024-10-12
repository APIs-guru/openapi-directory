# UndeleteDatasetRequest

Request format for undeleting a dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deletion_time** | **str** | Optional. The exact time when the dataset was deleted. If not specified, it will undelete the most recently deleted version. | [optional] 

## Example

```python
from openapi_client.models.undelete_dataset_request import UndeleteDatasetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteDatasetRequest from a JSON string
undelete_dataset_request_instance = UndeleteDatasetRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteDatasetRequest.to_json())

# convert the object into a dict
undelete_dataset_request_dict = undelete_dataset_request_instance.to_dict()
# create an instance of UndeleteDatasetRequest from a dict
undelete_dataset_request_from_dict = UndeleteDatasetRequest.from_dict(undelete_dataset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


