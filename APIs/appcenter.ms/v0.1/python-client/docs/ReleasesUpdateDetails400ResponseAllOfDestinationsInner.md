# ReleasesUpdateDetails400ResponseAllOfDestinationsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error Codes:&lt;br&gt; &lt;b&gt;invalid_store_secrets&lt;/b&gt;: While distributing to store, secrets provided for store are not valid.&lt;br&gt; &lt;b&gt;store_release_bad_request&lt;/b&gt;: Proper package release details for the store is not provided.&lt;br&gt; &lt;b&gt;store_release_unauthorized&lt;/b&gt;: User is not authorized to publish to store due to invalid developer credentials.&lt;br&gt; &lt;b&gt;store_release_forbidden&lt;/b&gt;: Publish to store is forbidden due to conflicts/errors in the release version and already existing version in the store.&lt;br&gt; &lt;b&gt;store_release_promotion&lt;/b&gt;: Release already distributed, promoting a release is not supported.&lt;br&gt; &lt;b&gt;store_track_deactivated&lt;/b&gt;: One or more tracks would be deactivated with this release. This is not supported yet.&lt;br&gt; &lt;b&gt;store_release_not_found&lt;/b&gt;: App with the given package name is not found in the store.&lt;br&gt; &lt;b&gt;store_release_not_available&lt;/b&gt;: The release is not available.&lt;br&gt; &lt;b&gt;internal_server_error&lt;/b&gt;: Failed to distribute to a destination due to an internal server error.  | [optional] 
**id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.releases_update_details400_response_all_of_destinations_inner import ReleasesUpdateDetails400ResponseAllOfDestinationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasesUpdateDetails400ResponseAllOfDestinationsInner from a JSON string
releases_update_details400_response_all_of_destinations_inner_instance = ReleasesUpdateDetails400ResponseAllOfDestinationsInner.from_json(json)
# print the JSON string representation of the object
print(ReleasesUpdateDetails400ResponseAllOfDestinationsInner.to_json())

# convert the object into a dict
releases_update_details400_response_all_of_destinations_inner_dict = releases_update_details400_response_all_of_destinations_inner_instance.to_dict()
# create an instance of ReleasesUpdateDetails400ResponseAllOfDestinationsInner from a dict
releases_update_details400_response_all_of_destinations_inner_from_dict = ReleasesUpdateDetails400ResponseAllOfDestinationsInner.from_dict(releases_update_details400_response_all_of_destinations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


