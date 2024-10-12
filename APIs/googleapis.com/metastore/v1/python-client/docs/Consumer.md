# Consumer

Contains information of the customer's network configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_location** | **str** | Output only. The location of the endpoint URI. Format: projects/{project}/locations/{location}. | [optional] [readonly] 
**endpoint_uri** | **str** | Output only. The URI of the endpoint used to access the metastore service. | [optional] [readonly] 
**subnetwork** | **str** | Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service&#39;s endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet&#39;s primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id} | [optional] 

## Example

```python
from openapi_client.models.consumer import Consumer

# TODO update the JSON string below
json = "{}"
# create an instance of Consumer from a JSON string
consumer_instance = Consumer.from_json(json)
# print the JSON string representation of the object
print(Consumer.to_json())

# convert the object into a dict
consumer_dict = consumer_instance.to_dict()
# create an instance of Consumer from a dict
consumer_from_dict = Consumer.from_dict(consumer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


