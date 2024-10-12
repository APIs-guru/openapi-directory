# RegexValidation

Validation based on regular expressions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regexes** | **List[str]** | Required. RE2 regular expressions used to validate the parameter&#39;s value. The value must match the regex in its entirety (substring matches are not sufficient). | [optional] 

## Example

```python
from openapi_client.models.regex_validation import RegexValidation

# TODO update the JSON string below
json = "{}"
# create an instance of RegexValidation from a JSON string
regex_validation_instance = RegexValidation.from_json(json)
# print the JSON string representation of the object
print(RegexValidation.to_json())

# convert the object into a dict
regex_validation_dict = regex_validation_instance.to_dict()
# create an instance of RegexValidation from a dict
regex_validation_from_dict = RegexValidation.from_dict(regex_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


