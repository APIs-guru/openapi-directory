# PersonalNameParsedOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_last_name** | [**FirstLastNameOut**](FirstLastNameOut.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** | The input name | [optional] 
**name_parser_type** | **str** | Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. | [optional] 
**name_parser_type_alt** | **str** | Second best alternative parsing. Name parsing is addressed as a classification problem, for example FN1LN1 means a first then last name order. | [optional] 
**score** | **float** | Higher score is better, but score is not normalized. Use calibratedProbability if available.  | [optional] 
**script** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.personal_name_parsed_out import PersonalNameParsedOut

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalNameParsedOut from a JSON string
personal_name_parsed_out_instance = PersonalNameParsedOut.from_json(json)
# print the JSON string representation of the object
print(PersonalNameParsedOut.to_json())

# convert the object into a dict
personal_name_parsed_out_dict = personal_name_parsed_out_instance.to_dict()
# create an instance of PersonalNameParsedOut from a dict
personal_name_parsed_out_from_dict = PersonalNameParsedOut.from_dict(personal_name_parsed_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


