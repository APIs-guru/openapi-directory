# GetPublisherProfilesByAccountIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profiles** | [**List[PublisherProfileApiProto]**](PublisherProfileApiProto.md) | Profiles for the requested publisher | [optional] 

## Example

```python
from openapi_client.models.get_publisher_profiles_by_account_id_response import GetPublisherProfilesByAccountIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublisherProfilesByAccountIdResponse from a JSON string
get_publisher_profiles_by_account_id_response_instance = GetPublisherProfilesByAccountIdResponse.from_json(json)
# print the JSON string representation of the object
print(GetPublisherProfilesByAccountIdResponse.to_json())

# convert the object into a dict
get_publisher_profiles_by_account_id_response_dict = get_publisher_profiles_by_account_id_response_instance.to_dict()
# create an instance of GetPublisherProfilesByAccountIdResponse from a dict
get_publisher_profiles_by_account_id_response_from_dict = GetPublisherProfilesByAccountIdResponse.from_dict(get_publisher_profiles_by_account_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


