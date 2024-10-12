# Repository

A repository associated to a parent connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **Dict[str, str]** | Allows clients to store small amounts of arbitrary data. | [optional] 
**create_time** | **str** | Output only. Server assigned timestamp for when the connection was created. | [optional] [readonly] 
**etag** | **str** | This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**name** | **str** | Immutable. Resource name of the repository, in the format &#x60;projects/*/locations/*/connections/*/repositories/*&#x60;. | [optional] 
**remote_uri** | **str** | Required. Git Clone HTTPS URI. | [optional] 
**update_time** | **str** | Output only. Server assigned timestamp for when the connection was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.repository import Repository

# TODO update the JSON string below
json = "{}"
# create an instance of Repository from a JSON string
repository_instance = Repository.from_json(json)
# print the JSON string representation of the object
print(Repository.to_json())

# convert the object into a dict
repository_dict = repository_instance.to_dict()
# create an instance of Repository from a dict
repository_from_dict = Repository.from_dict(repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


