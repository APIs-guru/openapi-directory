# ListPublisherProfilesResponse

Response message for profiles visible to the buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | List pagination support | [optional] 
**publisher_profiles** | [**List[PublisherProfile]**](PublisherProfile.md) | The list of matching publisher profiles. | [optional] 

## Example

```python
from openapi_client.models.list_publisher_profiles_response import ListPublisherProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPublisherProfilesResponse from a JSON string
list_publisher_profiles_response_instance = ListPublisherProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListPublisherProfilesResponse.to_json())

# convert the object into a dict
list_publisher_profiles_response_dict = list_publisher_profiles_response_instance.to_dict()
# create an instance of ListPublisherProfilesResponse from a dict
list_publisher_profiles_response_from_dict = ListPublisherProfilesResponse.from_dict(list_publisher_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


