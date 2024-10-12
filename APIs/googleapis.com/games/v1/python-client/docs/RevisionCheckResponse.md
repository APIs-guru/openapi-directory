# RevisionCheckResponse

A third party checking a revision response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The version of the API this client revision should use when calling API methods. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#revisionCheckResponse&#x60;. | [optional] 
**revision_status** | **str** | The result of the revision check. | [optional] 

## Example

```python
from openapi_client.models.revision_check_response import RevisionCheckResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RevisionCheckResponse from a JSON string
revision_check_response_instance = RevisionCheckResponse.from_json(json)
# print the JSON string representation of the object
print(RevisionCheckResponse.to_json())

# convert the object into a dict
revision_check_response_dict = revision_check_response_instance.to_dict()
# create an instance of RevisionCheckResponse from a dict
revision_check_response_from_dict = RevisionCheckResponse.from_dict(revision_check_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


