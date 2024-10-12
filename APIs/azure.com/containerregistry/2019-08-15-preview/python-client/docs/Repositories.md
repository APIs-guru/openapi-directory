# Repositories

List of repositories

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repositories** | **List[str]** | Repository names | [optional] 

## Example

```python
from openapi_client.models.repositories import Repositories

# TODO update the JSON string below
json = "{}"
# create an instance of Repositories from a JSON string
repositories_instance = Repositories.from_json(json)
# print the JSON string representation of the object
print(Repositories.to_json())

# convert the object into a dict
repositories_dict = repositories_instance.to_dict()
# create an instance of Repositories from a dict
repositories_from_dict = Repositories.from_dict(repositories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


