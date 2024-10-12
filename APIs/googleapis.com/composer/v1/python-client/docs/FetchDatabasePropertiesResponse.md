# FetchDatabasePropertiesResponse

Response for FetchDatabasePropertiesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_failover_replica_available** | **bool** | The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only fail over to the failover replica when the status is true. | [optional] 
**primary_gce_zone** | **str** | The Compute Engine zone that the instance is currently serving from. | [optional] 
**secondary_gce_zone** | **str** | The Compute Engine zone that the failover instance is currently serving from for a regional Cloud SQL instance. | [optional] 

## Example

```python
from openapi_client.models.fetch_database_properties_response import FetchDatabasePropertiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchDatabasePropertiesResponse from a JSON string
fetch_database_properties_response_instance = FetchDatabasePropertiesResponse.from_json(json)
# print the JSON string representation of the object
print(FetchDatabasePropertiesResponse.to_json())

# convert the object into a dict
fetch_database_properties_response_dict = fetch_database_properties_response_instance.to_dict()
# create an instance of FetchDatabasePropertiesResponse from a dict
fetch_database_properties_response_from_dict = FetchDatabasePropertiesResponse.from_dict(fetch_database_properties_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


