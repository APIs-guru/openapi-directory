# CloudSqlProperties

Connection properties specific to the Cloud SQL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential** | [**CloudSqlCredential**](CloudSqlCredential.md) |  | [optional] 
**database** | **str** | Database name. | [optional] 
**instance_id** | **str** | Cloud SQL instance ID in the form &#x60;project:location:instance&#x60;. | [optional] 
**service_account_id** | **str** | Output only. The account ID of the service used for the purpose of this connection. When the connection is used in the context of an operation in BigQuery, this service account will serve as the identity being used for connecting to the CloudSQL instance specified in this connection. | [optional] [readonly] 
**type** | **str** | Type of the Cloud SQL database. | [optional] 

## Example

```python
from openapi_client.models.cloud_sql_properties import CloudSqlProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSqlProperties from a JSON string
cloud_sql_properties_instance = CloudSqlProperties.from_json(json)
# print the JSON string representation of the object
print(CloudSqlProperties.to_json())

# convert the object into a dict
cloud_sql_properties_dict = cloud_sql_properties_instance.to_dict()
# create an instance of CloudSqlProperties from a dict
cloud_sql_properties_from_dict = CloudSqlProperties.from_dict(cloud_sql_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


