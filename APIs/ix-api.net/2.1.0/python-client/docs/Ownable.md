# Ownable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 

## Example

```python
from openapi_client.models.ownable import Ownable

# TODO update the JSON string below
json = "{}"
# create an instance of Ownable from a JSON string
ownable_instance = Ownable.from_json(json)
# print the JSON string representation of the object
print(Ownable.to_json())

# convert the object into a dict
ownable_dict = ownable_instance.to_dict()
# create an instance of Ownable from a dict
ownable_from_dict = Ownable.from_dict(ownable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


