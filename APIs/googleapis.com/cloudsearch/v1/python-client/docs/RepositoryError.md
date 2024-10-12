# RepositoryError

Errors when the connector is communicating to the source repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | Message that describes the error. The maximum allowable length of the message is 8192 characters. | [optional] 
**http_status_code** | **int** | Error codes. Matches the definition of HTTP status codes. | [optional] 
**type** | **str** | The type of error. | [optional] 

## Example

```python
from openapi_client.models.repository_error import RepositoryError

# TODO update the JSON string below
json = "{}"
# create an instance of RepositoryError from a JSON string
repository_error_instance = RepositoryError.from_json(json)
# print the JSON string representation of the object
print(RepositoryError.to_json())

# convert the object into a dict
repository_error_dict = repository_error_instance.to_dict()
# create an instance of RepositoryError from a dict
repository_error_from_dict = RepositoryError.from_dict(repository_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


