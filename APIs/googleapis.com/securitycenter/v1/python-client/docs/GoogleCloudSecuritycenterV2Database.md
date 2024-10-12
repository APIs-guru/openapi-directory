# GoogleCloudSecuritycenterV2Database

Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human-readable name of the database that the user connected to. | [optional] 
**grantees** | **List[str]** | The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. | [optional] 
**name** | **str** | Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. | [optional] 
**query** | **str** | The SQL statement that is associated with the database access. | [optional] 
**user_name** | **str** | The username used to connect to the database. The username might not be an IAM principal and does not have a set format. | [optional] 
**version** | **str** | The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_database import GoogleCloudSecuritycenterV2Database

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Database from a JSON string
google_cloud_securitycenter_v2_database_instance = GoogleCloudSecuritycenterV2Database.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Database.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_database_dict = google_cloud_securitycenter_v2_database_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Database from a dict
google_cloud_securitycenter_v2_database_from_dict = GoogleCloudSecuritycenterV2Database.from_dict(google_cloud_securitycenter_v2_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


