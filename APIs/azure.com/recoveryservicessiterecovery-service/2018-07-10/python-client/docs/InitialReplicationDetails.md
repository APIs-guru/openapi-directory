# InitialReplicationDetails

Initial replication details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_replication_progress_percentage** | **str** | The initial replication progress percentage. | [optional] 
**initial_replication_type** | **str** | Initial replication type. | [optional] 

## Example

```python
from openapi_client.models.initial_replication_details import InitialReplicationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InitialReplicationDetails from a JSON string
initial_replication_details_instance = InitialReplicationDetails.from_json(json)
# print the JSON string representation of the object
print(InitialReplicationDetails.to_json())

# convert the object into a dict
initial_replication_details_dict = initial_replication_details_instance.to_dict()
# create an instance of InitialReplicationDetails from a dict
initial_replication_details_from_dict = InitialReplicationDetails.from_dict(initial_replication_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


