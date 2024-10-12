# CliOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**enum** | **Dict[str, str]** |  | [optional] 
**option_name** | **str** |  | [optional] 
**type** | **str** | Data type is based on the types supported by the JSON-Schema | [optional] 

## Example

```python
from openapi_client.models.cli_option import CliOption

# TODO update the JSON string below
json = "{}"
# create an instance of CliOption from a JSON string
cli_option_instance = CliOption.from_json(json)
# print the JSON string representation of the object
print(CliOption.to_json())

# convert the object into a dict
cli_option_dict = cli_option_instance.to_dict()
# create an instance of CliOption from a dict
cli_option_from_dict = CliOption.from_dict(cli_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


