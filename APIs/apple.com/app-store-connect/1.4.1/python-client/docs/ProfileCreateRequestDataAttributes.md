# ProfileCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**profile_type** | **str** |  | 

## Example

```python
from openapi_client.models.profile_create_request_data_attributes import ProfileCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileCreateRequestDataAttributes from a JSON string
profile_create_request_data_attributes_instance = ProfileCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(ProfileCreateRequestDataAttributes.to_json())

# convert the object into a dict
profile_create_request_data_attributes_dict = profile_create_request_data_attributes_instance.to_dict()
# create an instance of ProfileCreateRequestDataAttributes from a dict
profile_create_request_data_attributes_from_dict = ProfileCreateRequestDataAttributes.from_dict(profile_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


