# CloudSqlConnectionProfile

Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_public_ip** | **str** | Output only. The Cloud SQL database instance&#39;s additional (outgoing) public IP. Used when the Cloud SQL database availability type is REGIONAL (i.e. multiple zones / highly available). | [optional] [readonly] 
**cloud_sql_id** | **str** | Output only. The Cloud SQL instance ID that this connection profile is associated with. | [optional] [readonly] 
**private_ip** | **str** | Output only. The Cloud SQL database instance&#39;s private IP. | [optional] [readonly] 
**public_ip** | **str** | Output only. The Cloud SQL database instance&#39;s public IP. | [optional] [readonly] 
**settings** | [**CloudSqlSettings**](CloudSqlSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_sql_connection_profile import CloudSqlConnectionProfile

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSqlConnectionProfile from a JSON string
cloud_sql_connection_profile_instance = CloudSqlConnectionProfile.from_json(json)
# print the JSON string representation of the object
print(CloudSqlConnectionProfile.to_json())

# convert the object into a dict
cloud_sql_connection_profile_dict = cloud_sql_connection_profile_instance.to_dict()
# create an instance of CloudSqlConnectionProfile from a dict
cloud_sql_connection_profile_from_dict = CloudSqlConnectionProfile.from_dict(cloud_sql_connection_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


