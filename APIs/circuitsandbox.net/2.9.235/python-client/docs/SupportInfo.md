# SupportInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**support_email_address** | **str** | The email address of the support | [optional] 
**support_type** | **object** | The type of support (a number) | [optional] 

## Example

```python
from openapi_client.models.support_info import SupportInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SupportInfo from a JSON string
support_info_instance = SupportInfo.from_json(json)
# print the JSON string representation of the object
print(SupportInfo.to_json())

# convert the object into a dict
support_info_dict = support_info_instance.to_dict()
# create an instance of SupportInfo from a dict
support_info_from_dict = SupportInfo.from_dict(support_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


