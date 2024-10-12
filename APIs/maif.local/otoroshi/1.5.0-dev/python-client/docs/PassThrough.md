# PassThrough

Strategy where only signature and field values are verified

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | String with value PassThrough | 
**verification_settings** | [**VerificationSettings**](VerificationSettings.md) |  | 

## Example

```python
from openapi_client.models.pass_through import PassThrough

# TODO update the JSON string below
json = "{}"
# create an instance of PassThrough from a JSON string
pass_through_instance = PassThrough.from_json(json)
# print the JSON string representation of the object
print(PassThrough.to_json())

# convert the object into a dict
pass_through_dict = pass_through_instance.to_dict()
# create an instance of PassThrough from a dict
pass_through_from_dict = PassThrough.from_dict(pass_through_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


