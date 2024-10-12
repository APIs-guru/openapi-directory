# BuildsCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug** | **bool** | Run build in debug mode | [optional] 
**source_version** | **str** | Version to build which represents the full Git commit reference | [optional] 

## Example

```python
from openapi_client.models.builds_create_request import BuildsCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsCreateRequest from a JSON string
builds_create_request_instance = BuildsCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BuildsCreateRequest.to_json())

# convert the object into a dict
builds_create_request_dict = builds_create_request_instance.to_dict()
# create an instance of BuildsCreateRequest from a dict
builds_create_request_from_dict = BuildsCreateRequest.from_dict(builds_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


