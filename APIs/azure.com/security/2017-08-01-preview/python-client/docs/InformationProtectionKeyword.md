# InformationProtectionKeyword

The information type keyword.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_be_numeric** | **bool** | Indicates whether the keyword can be applied on numeric types or not. | [optional] 
**custom** | **bool** | Indicates whether the keyword is custom or not. | [optional] 
**excluded** | **bool** | Indicates whether the keyword is excluded or not. | [optional] 
**pattern** | **str** | The keyword pattern. | [optional] 

## Example

```python
from openapi_client.models.information_protection_keyword import InformationProtectionKeyword

# TODO update the JSON string below
json = "{}"
# create an instance of InformationProtectionKeyword from a JSON string
information_protection_keyword_instance = InformationProtectionKeyword.from_json(json)
# print the JSON string representation of the object
print(InformationProtectionKeyword.to_json())

# convert the object into a dict
information_protection_keyword_dict = information_protection_keyword_instance.to_dict()
# create an instance of InformationProtectionKeyword from a dict
information_protection_keyword_from_dict = InformationProtectionKeyword.from_dict(information_protection_keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


