# CreateCustomFileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_file** | [**CustomFile**](CustomFile.md) |  | 
**errors** | **List[str]** |  | [optional] 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.create_custom_file_response import CreateCustomFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCustomFileResponse from a JSON string
create_custom_file_response_instance = CreateCustomFileResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCustomFileResponse.to_json())

# convert the object into a dict
create_custom_file_response_dict = create_custom_file_response_instance.to_dict()
# create an instance of CreateCustomFileResponse from a dict
create_custom_file_response_from_dict = CreateCustomFileResponse.from_dict(create_custom_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


