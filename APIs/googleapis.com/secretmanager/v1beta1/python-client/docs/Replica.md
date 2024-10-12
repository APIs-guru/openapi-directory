# Replica

Represents a Replica for this Secret.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The canonical IDs of the location to replicate data. For example: &#x60;\&quot;us-east1\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.replica import Replica

# TODO update the JSON string below
json = "{}"
# create an instance of Replica from a JSON string
replica_instance = Replica.from_json(json)
# print the JSON string representation of the object
print(Replica.to_json())

# convert the object into a dict
replica_dict = replica_instance.to_dict()
# create an instance of Replica from a dict
replica_from_dict = Replica.from_dict(replica_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


