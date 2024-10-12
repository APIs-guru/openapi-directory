# CloudSQLInstanceInfo

For display only. Metadata associated with a Cloud SQL instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Cloud SQL instance. | [optional] 
**external_ip** | **str** | External IP address of a Cloud SQL instance. | [optional] 
**internal_ip** | **str** | Internal IP address of a Cloud SQL instance. | [optional] 
**network_uri** | **str** | URI of a Cloud SQL instance network or empty string if the instance does not have one. | [optional] 
**region** | **str** | Region in which the Cloud SQL instance is running. | [optional] 
**uri** | **str** | URI of a Cloud SQL instance. | [optional] 

## Example

```python
from openapi_client.models.cloud_sql_instance_info import CloudSQLInstanceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CloudSQLInstanceInfo from a JSON string
cloud_sql_instance_info_instance = CloudSQLInstanceInfo.from_json(json)
# print the JSON string representation of the object
print(CloudSQLInstanceInfo.to_json())

# convert the object into a dict
cloud_sql_instance_info_dict = cloud_sql_instance_info_instance.to_dict()
# create an instance of CloudSQLInstanceInfo from a dict
cloud_sql_instance_info_from_dict = CloudSQLInstanceInfo.from_dict(cloud_sql_instance_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


