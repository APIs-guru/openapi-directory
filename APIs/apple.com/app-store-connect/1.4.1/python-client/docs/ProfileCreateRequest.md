# ProfileCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ProfileCreateRequestData**](ProfileCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.profile_create_request import ProfileCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCreateRequest from a JSON string
profile_create_request_instance = ProfileCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ProfileCreateRequest.to_json())

# convert the object into a dict
profile_create_request_dict = profile_create_request_instance.to_dict()
# create an instance of ProfileCreateRequest from a dict
profile_create_request_from_dict = ProfileCreateRequest.from_dict(profile_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


