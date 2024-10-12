# ConnectSettings

Connect settings retrieval response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_type** | **str** | &#x60;SECOND_GEN&#x60;: Cloud SQL database instance. &#x60;EXTERNAL&#x60;: A database server that is not managed by Google. This property is read-only; use the &#x60;tier&#x60; property in the &#x60;settings&#x60; object to determine the database type. | [optional] 
**database_version** | **str** | The database engine type and version. The &#x60;databaseVersion&#x60; field cannot be changed after instance creation. MySQL instances: &#x60;MYSQL_8_0&#x60;, &#x60;MYSQL_5_7&#x60; (default), or &#x60;MYSQL_5_6&#x60;. PostgreSQL instances: &#x60;POSTGRES_9_6&#x60;, &#x60;POSTGRES_10&#x60;, &#x60;POSTGRES_11&#x60;, &#x60;POSTGRES_12&#x60; (default), &#x60;POSTGRES_13&#x60;, or &#x60;POSTGRES_14&#x60;. SQL Server instances: &#x60;SQLSERVER_2017_STANDARD&#x60; (default), &#x60;SQLSERVER_2017_ENTERPRISE&#x60;, &#x60;SQLSERVER_2017_EXPRESS&#x60;, &#x60;SQLSERVER_2017_WEB&#x60;, &#x60;SQLSERVER_2019_STANDARD&#x60;, &#x60;SQLSERVER_2019_ENTERPRISE&#x60;, &#x60;SQLSERVER_2019_EXPRESS&#x60;, or &#x60;SQLSERVER_2019_WEB&#x60;. | [optional] 
**dns_name** | **str** | The dns name of the instance. | [optional] 
**ip_addresses** | [**List[IpMapping]**](IpMapping.md) | The assigned IP addresses for the instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#connectSettings&#x60;. | [optional] 
**psc_enabled** | **bool** | Whether PSC connectivity is enabled for this instance. | [optional] 
**region** | **str** | The cloud region for the instance. For example, &#x60;us-central1&#x60;, &#x60;europe-west1&#x60;. The region cannot be changed after instance creation. | [optional] 
**server_ca_cert** | [**SslCert**](SslCert.md) |  | [optional] 

## Example

```python
from openapi_client.models.connect_settings import ConnectSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectSettings from a JSON string
connect_settings_instance = ConnectSettings.from_json(json)
# print the JSON string representation of the object
print(ConnectSettings.to_json())

# convert the object into a dict
connect_settings_dict = connect_settings_instance.to_dict()
# create an instance of ConnectSettings from a dict
connect_settings_from_dict = ConnectSettings.from_dict(connect_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


