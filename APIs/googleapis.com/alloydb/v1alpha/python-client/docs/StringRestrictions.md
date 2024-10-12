# StringRestrictions

Restrictions on STRING type values

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | The list of allowed values, if bounded. This field will be empty if there is a unbounded number of allowed values. | [optional] 

## Example

```python
from openapi_client.models.string_restrictions import StringRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of StringRestrictions from a JSON string
string_restrictions_instance = StringRestrictions.from_json(json)
# print the JSON string representation of the object
print(StringRestrictions.to_json())

# convert the object into a dict
string_restrictions_dict = string_restrictions_instance.to_dict()
# create an instance of StringRestrictions from a dict
string_restrictions_from_dict = StringRestrictions.from_dict(string_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


