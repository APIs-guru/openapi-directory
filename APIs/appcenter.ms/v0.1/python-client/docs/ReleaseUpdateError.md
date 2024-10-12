# ReleaseUpdateError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | 
**message** | **str** |  | 
**destinations** | [**List[ReleasesUpdateDetails400ResponseAllOfDestinationsInner]**](ReleasesUpdateDetails400ResponseAllOfDestinationsInner.md) |  | [optional] 
**mandatory_update** | **bool** |  | [optional] 
**release_notes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.release_update_error import ReleaseUpdateError

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseUpdateError from a JSON string
release_update_error_instance = ReleaseUpdateError.from_json(json)
# print the JSON string representation of the object
print(ReleaseUpdateError.to_json())

# convert the object into a dict
release_update_error_dict = release_update_error_instance.to_dict()
# create an instance of ReleaseUpdateError from a dict
release_update_error_from_dict = ReleaseUpdateError.from_dict(release_update_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


