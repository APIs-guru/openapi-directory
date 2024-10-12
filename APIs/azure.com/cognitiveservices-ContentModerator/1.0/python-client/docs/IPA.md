# IPA

IP Address details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | Index(Location) of the IP Address in the input text content. | [optional] 
**sub_type** | **str** | Subtype of the detected IP Address. | [optional] 
**text** | **str** | Detected IP Address. | [optional] 

## Example

```python
from openapi_client.models.ipa import IPA

# TODO update the JSON string below
json = "{}"
# create an instance of IPA from a JSON string
ipa_instance = IPA.from_json(json)
# print the JSON string representation of the object
print(IPA.to_json())

# convert the object into a dict
ipa_dict = ipa_instance.to_dict()
# create an instance of IPA from a dict
ipa_from_dict = IPA.from_dict(ipa_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


