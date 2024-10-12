# InitiatePortabilityArchiveRequest

Request to kick off an Archive job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **List[str]** | The resources from which you&#39;re exporting data. These values have a 1:1 correspondence with the OAuth scopes. | [optional] 

## Example

```python
from openapi_client.models.initiate_portability_archive_request import InitiatePortabilityArchiveRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InitiatePortabilityArchiveRequest from a JSON string
initiate_portability_archive_request_instance = InitiatePortabilityArchiveRequest.from_json(json)
# print the JSON string representation of the object
print(InitiatePortabilityArchiveRequest.to_json())

# convert the object into a dict
initiate_portability_archive_request_dict = initiate_portability_archive_request_instance.to_dict()
# create an instance of InitiatePortabilityArchiveRequest from a dict
initiate_portability_archive_request_from_dict = InitiatePortabilityArchiveRequest.from_dict(initiate_portability_archive_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


