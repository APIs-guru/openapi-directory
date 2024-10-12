# ReleaseDetailsUpdateResponse

Response for updating release details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_notes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.release_details_update_response import ReleaseDetailsUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseDetailsUpdateResponse from a JSON string
release_details_update_response_instance = ReleaseDetailsUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(ReleaseDetailsUpdateResponse.to_json())

# convert the object into a dict
release_details_update_response_dict = release_details_update_response_instance.to_dict()
# create an instance of ReleaseDetailsUpdateResponse from a dict
release_details_update_response_from_dict = ReleaseDetailsUpdateResponse.from_dict(release_details_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


