# BuildsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The build status; used to cancel builds | [optional] 

## Example

```python
from openapi_client.models.builds_update_request import BuildsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsUpdateRequest from a JSON string
builds_update_request_instance = BuildsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BuildsUpdateRequest.to_json())

# convert the object into a dict
builds_update_request_dict = builds_update_request_instance.to_dict()
# create an instance of BuildsUpdateRequest from a dict
builds_update_request_from_dict = BuildsUpdateRequest.from_dict(builds_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


