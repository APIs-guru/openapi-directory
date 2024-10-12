# ProfileCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ProfileCreateRequestDataAttributes**](ProfileCreateRequestDataAttributes.md) |  | 
**relationships** | [**ProfileCreateRequestDataRelationships**](ProfileCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.profile_create_request_data import ProfileCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCreateRequestData from a JSON string
profile_create_request_data_instance = ProfileCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(ProfileCreateRequestData.to_json())

# convert the object into a dict
profile_create_request_data_dict = profile_create_request_data_instance.to_dict()
# create an instance of ProfileCreateRequestData from a dict
profile_create_request_data_from_dict = ProfileCreateRequestData.from_dict(profile_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


