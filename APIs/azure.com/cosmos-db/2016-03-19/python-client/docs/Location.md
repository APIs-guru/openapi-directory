# Location

A region in which the Azure Cosmos DB database account is deployed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_endpoint** | **str** | The connection endpoint for the specific region. Example: https://&amp;lt;accountName&amp;gt;-&amp;lt;locationName&amp;gt;.documents.azure.com:443/ | [optional] [readonly] 
**failover_priority** | **int** | The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority &#x3D; (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. | [optional] 
**id** | **str** | The unique identifier of the region within the database account. Example: &amp;lt;accountName&amp;gt;-&amp;lt;locationName&amp;gt;. | [optional] [readonly] 
**is_zone_redundant** | **bool** | Flag to indicate whether or not this region is an AvailabilityZone region | [optional] 
**location_name** | **str** | The name of the region. | [optional] 
**provisioning_state** | **str** | The status of the Cosmos DB account at the time the operation was called. The status can be one of following. &#39;Creating&#39; – the Cosmos DB account is being created. When an account is in Creating state, only properties that are specified as input for the Create Cosmos DB account operation are returned. &#39;Succeeded&#39; – the Cosmos DB account is active for use. &#39;Updating&#39; – the Cosmos DB account is being updated. &#39;Deleting&#39; – the Cosmos DB account is being deleted. &#39;Failed&#39; – the Cosmos DB account failed creation. | [optional] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


