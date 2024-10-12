# ReleasesUpdate200Response

Response for updating release details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_notes** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.releases_update200_response import ReleasesUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdate200Response from a JSON string
releases_update200_response_instance = ReleasesUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdate200Response.to_json())

# convert the object into a dict
releases_update200_response_dict = releases_update200_response_instance.to_dict()
# create an instance of ReleasesUpdate200Response from a dict
releases_update200_response_from_dict = ReleasesUpdate200Response.from_dict(releases_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


