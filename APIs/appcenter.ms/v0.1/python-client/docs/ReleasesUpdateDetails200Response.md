# ReleasesUpdateDetails200Response

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
from openapi_client.models.releases_update_details200_response import ReleasesUpdateDetails200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateDetails200Response from a JSON string
releases_update_details200_response_instance = ReleasesUpdateDetails200Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateDetails200Response.to_json())

# convert the object into a dict
releases_update_details200_response_dict = releases_update_details200_response_instance.to_dict()
# create an instance of ReleasesUpdateDetails200Response from a dict
releases_update_details200_response_from_dict = ReleasesUpdateDetails200Response.from_dict(releases_update_details200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


