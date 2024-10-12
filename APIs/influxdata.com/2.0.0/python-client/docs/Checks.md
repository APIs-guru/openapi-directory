# Checks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checks** | [**List[Check]**](Check.md) |  | [optional] 
**links** | [**Links**](Links.md) |  | [optional] 

## Example

```python
from openapi_client.models.checks import Checks

# TODO update the JSON string below
json = "{}"
# create an instance of Checks from a JSON string
checks_instance = Checks.from_json(json)
# print the JSON string representation of the object
print(Checks.to_json())

# convert the object into a dict
checks_dict = checks_instance.to_dict()
# create an instance of Checks from a dict
checks_from_dict = Checks.from_dict(checks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


