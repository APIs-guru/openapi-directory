# InputString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | String variable or text value | 

## Example

```python
from openapi_client.models.input_string import InputString

# TODO update the JSON string below
json = "{}"
# create an instance of InputString from a JSON string
input_string_instance = InputString.from_json(json)
# print the JSON string representation of the object
print(InputString.to_json())

# convert the object into a dict
input_string_dict = input_string_instance.to_dict()
# create an instance of InputString from a dict
input_string_from_dict = InputString.from_dict(input_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


