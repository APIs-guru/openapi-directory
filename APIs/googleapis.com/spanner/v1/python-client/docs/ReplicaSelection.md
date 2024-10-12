# ReplicaSelection

The directed read replica selector. Callers must provide one or more of the following fields for replica selection: * `location` - The location must be one of the regions within the multi-region configuration of your database. * `type` - The type of the replica. Some examples of using replica_selectors are: * `location:us-east1` --> The \"us-east1\" replica(s) of any available type will be used to process the request. * `type:READ_ONLY` --> The \"READ_ONLY\" type replica(s) in nearest available location will be used to process the request. * `location:us-east1 type:READ_ONLY` --> The \"READ_ONLY\" type replica(s) in location \"us-east1\" will be used to process the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The location or region of the serving requests, e.g. \&quot;us-east1\&quot;. | [optional] 
**type** | **str** | The type of replica. | [optional] 

## Example

```python
from openapi_client.models.replica_selection import ReplicaSelection

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaSelection from a JSON string
replica_selection_instance = ReplicaSelection.from_json(json)
# print the JSON string representation of the object
print(ReplicaSelection.to_json())

# convert the object into a dict
replica_selection_dict = replica_selection_instance.to_dict()
# create an instance of ReplicaSelection from a dict
replica_selection_from_dict = ReplicaSelection.from_dict(replica_selection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


