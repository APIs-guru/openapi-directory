# ManageablePartial

Managed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 

## Example

```python
from openapi_client.models.manageable_partial import ManageablePartial

# TODO update the JSON string below
json = "{}"
# create an instance of ManageablePartial from a JSON string
manageable_partial_instance = ManageablePartial.from_json(json)
# print the JSON string representation of the object
print(ManageablePartial.to_json())

# convert the object into a dict
manageable_partial_dict = manageable_partial_instance.to_dict()
# create an instance of ManageablePartial from a dict
manageable_partial_from_dict = ManageablePartial.from_dict(manageable_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


