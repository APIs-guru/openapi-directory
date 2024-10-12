# Synchronize

Payload for the synchronizing the data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**synchronization_mode** | **str** | Mode of synchronization used in triggers and snapshot sync. Incremental by default | [optional] 

## Example

```python
from openapi_client.models.synchronize import Synchronize

# TODO update the JSON string below
json = "{}"
# create an instance of Synchronize from a JSON string
synchronize_instance = Synchronize.from_json(json)
# print the JSON string representation of the object
print(Synchronize.to_json())

# convert the object into a dict
synchronize_dict = synchronize_instance.to_dict()
# create an instance of Synchronize from a dict
synchronize_from_dict = Synchronize.from_dict(synchronize_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


