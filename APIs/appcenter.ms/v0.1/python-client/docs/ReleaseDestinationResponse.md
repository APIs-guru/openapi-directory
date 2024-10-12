# ReleaseDestinationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique id for the release destination | 
**mandatory_update** | **bool** | Flag to mark the release for the provided destinations as mandatory | 
**provisioning_status_url** | **str** | The url to check provisioning status. | [optional] 

## Example

```python
from openapi_client.models.release_destination_response import ReleaseDestinationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseDestinationResponse from a JSON string
release_destination_response_instance = ReleaseDestinationResponse.from_json(json)
# print the JSON string representation of the object
print(ReleaseDestinationResponse.to_json())

# convert the object into a dict
release_destination_response_dict = release_destination_response_instance.to_dict()
# create an instance of ReleaseDestinationResponse from a dict
release_destination_response_from_dict = ReleaseDestinationResponse.from_dict(release_destination_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


