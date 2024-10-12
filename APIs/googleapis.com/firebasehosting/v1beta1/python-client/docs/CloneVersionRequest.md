# CloneVersionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude** | [**PathFilter**](PathFilter.md) |  | [optional] 
**finalize** | **bool** | If true, the call to &#x60;CloneVersion&#x60; immediately finalizes the version after cloning is complete. If false, the cloned version will have a status of &#x60;CREATED&#x60;. Use [&#x60;UpdateVersion&#x60;](patch) to set the status of the version to &#x60;FINALIZED&#x60;. | [optional] 
**include** | [**PathFilter**](PathFilter.md) |  | [optional] 
**source_version** | **str** | Required. The unique identifier for the version to be cloned, in the format: sites/SITE_ID/versions/VERSION_ID | [optional] 

## Example

```python
from openapi_client.models.clone_version_request import CloneVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneVersionRequest from a JSON string
clone_version_request_instance = CloneVersionRequest.from_json(json)
# print the JSON string representation of the object
print(CloneVersionRequest.to_json())

# convert the object into a dict
clone_version_request_dict = clone_version_request_instance.to_dict()
# create an instance of CloneVersionRequest from a dict
clone_version_request_from_dict = CloneVersionRequest.from_dict(clone_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


