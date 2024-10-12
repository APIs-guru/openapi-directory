# ReleaseUpdateResponse

Response for updating a release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[ReleasesUpdateDetails200ResponseDestinationsInner]**](ReleasesUpdateDetails200ResponseDestinationsInner.md) |  | [optional] 
**enabled** | **bool** |  | [optional] 
**mandatory_update** | **bool** |  | [optional] 
**provisioning_status_url** | **str** |  | [optional] 
**release_notes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.release_update_response import ReleaseUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseUpdateResponse from a JSON string
release_update_response_instance = ReleaseUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(ReleaseUpdateResponse.to_json())

# convert the object into a dict
release_update_response_dict = release_update_response_instance.to_dict()
# create an instance of ReleaseUpdateResponse from a dict
release_update_response_from_dict = ReleaseUpdateResponse.from_dict(release_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


