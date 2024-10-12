# InputInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | [**InputFile**](InputFile.md) |  | [optional] 
**settings** | [**InputSettings**](InputSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.input_info import InputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InputInfo from a JSON string
input_info_instance = InputInfo.from_json(json)
# print the JSON string representation of the object
print(InputInfo.to_json())

# convert the object into a dict
input_info_dict = input_info_instance.to_dict()
# create an instance of InputInfo from a dict
input_info_from_dict = InputInfo.from_dict(input_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


