# AttemptInfoRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt** | [**AttemptRead**](AttemptRead.md) |  | 
**logs** | [**LogRead**](LogRead.md) |  | 

## Example

```python
from openapi_client.models.attempt_info_read import AttemptInfoRead

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptInfoRead from a JSON string
attempt_info_read_instance = AttemptInfoRead.from_json(json)
# print the JSON string representation of the object
print(AttemptInfoRead.to_json())

# convert the object into a dict
attempt_info_read_dict = attempt_info_read_instance.to_dict()
# create an instance of AttemptInfoRead from a dict
attempt_info_read_from_dict = AttemptInfoRead.from_dict(attempt_info_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


