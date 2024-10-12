# Manageable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 

## Example

```python
from openapi_client.models.manageable import Manageable

# TODO update the JSON string below
json = "{}"
# create an instance of Manageable from a JSON string
manageable_instance = Manageable.from_json(json)
# print the JSON string representation of the object
print(Manageable.to_json())

# convert the object into a dict
manageable_dict = manageable_instance.to_dict()
# create an instance of Manageable from a dict
manageable_from_dict = Manageable.from_dict(manageable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


