# ReleasesUpdateDetails400Response


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
from openapi_client.models.releases_update_details400_response import ReleasesUpdateDetails400Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateDetails400Response from a JSON string
releases_update_details400_response_instance = ReleasesUpdateDetails400Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateDetails400Response.to_json())

# convert the object into a dict
releases_update_details400_response_dict = releases_update_details400_response_instance.to_dict()
# create an instance of ReleasesUpdateDetails400Response from a dict
releases_update_details400_response_from_dict = ReleasesUpdateDetails400Response.from_dict(releases_update_details400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


