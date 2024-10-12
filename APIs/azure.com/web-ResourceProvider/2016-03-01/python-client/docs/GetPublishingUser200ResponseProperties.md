# GetPublishingUser200ResponseProperties

User resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Username | [optional] 
**publishing_password** | **str** | Password used for publishing. | [optional] 
**publishing_password_hash** | **str** | Password hash used for publishing. | [optional] 
**publishing_password_hash_salt** | **str** | Password hash salt used for publishing. | [optional] 
**publishing_user_name** | **str** | Username used for publishing. | 

## Example

```python
from openapi_client.models.get_publishing_user200_response_properties import GetPublishingUser200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GetPublishingUser200ResponseProperties from a JSON string
get_publishing_user200_response_properties_instance = GetPublishingUser200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(GetPublishingUser200ResponseProperties.to_json())

# convert the object into a dict
get_publishing_user200_response_properties_dict = get_publishing_user200_response_properties_instance.to_dict()
# create an instance of GetPublishingUser200ResponseProperties from a dict
get_publishing_user200_response_properties_from_dict = GetPublishingUser200ResponseProperties.from_dict(get_publishing_user200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


