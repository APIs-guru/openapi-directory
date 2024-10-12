# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collection_list_metric_definitions**](DefaultApi.md#collection_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metricDefinitions | 
[**collection_list_metrics**](DefaultApi.md#collection_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/metrics | 
[**collection_list_usages**](DefaultApi.md#collection_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/usages | 
[**collection_partition_list_metrics**](DefaultApi.md#collection_partition_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics | 
[**collection_partition_list_usages**](DefaultApi.md#collection_partition_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitions/usages | 
[**collection_partition_region_list_metrics**](DefaultApi.md#collection_partition_region_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitions/metrics | 
[**collection_region_list_metrics**](DefaultApi.md#collection_region_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/metrics | 
[**database_account_region_list_metrics**](DefaultApi.md#database_account_region_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/metrics | 
[**database_accounts_check_name_exists**](DefaultApi.md#database_accounts_check_name_exists) | **HEAD** /providers/Microsoft.DocumentDB/databaseAccountNames/{accountName} | 
[**database_accounts_create_or_update**](DefaultApi.md#database_accounts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_accounts_create_update_cassandra_keyspace**](DefaultApi.md#database_accounts_create_update_cassandra_keyspace) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName} | 
[**database_accounts_create_update_cassandra_table**](DefaultApi.md#database_accounts_create_update_cassandra_table) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/tables/{tableName} | 
[**database_accounts_create_update_gremlin_database**](DefaultApi.md#database_accounts_create_update_gremlin_database) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName} | 
[**database_accounts_create_update_gremlin_graph**](DefaultApi.md#database_accounts_create_update_gremlin_graph) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/graphs/{graphName} | 
[**database_accounts_create_update_mongo_db_collection**](DefaultApi.md#database_accounts_create_update_mongo_db_collection) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/collections/{collectionName} | 
[**database_accounts_create_update_mongo_db_database**](DefaultApi.md#database_accounts_create_update_mongo_db_database) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName} | 
[**database_accounts_create_update_sql_container**](DefaultApi.md#database_accounts_create_update_sql_container) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/containers/{containerName} | 
[**database_accounts_create_update_sql_database**](DefaultApi.md#database_accounts_create_update_sql_database) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName} | 
[**database_accounts_create_update_table**](DefaultApi.md#database_accounts_create_update_table) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/table/tables/{tableName} | 
[**database_accounts_delete**](DefaultApi.md#database_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_accounts_delete_cassandra_keyspace**](DefaultApi.md#database_accounts_delete_cassandra_keyspace) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName} | 
[**database_accounts_delete_cassandra_table**](DefaultApi.md#database_accounts_delete_cassandra_table) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/tables/{tableName} | 
[**database_accounts_delete_gremlin_database**](DefaultApi.md#database_accounts_delete_gremlin_database) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName} | 
[**database_accounts_delete_gremlin_graph**](DefaultApi.md#database_accounts_delete_gremlin_graph) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/graphs/{graphName} | 
[**database_accounts_delete_mongo_db_collection**](DefaultApi.md#database_accounts_delete_mongo_db_collection) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/collections/{collectionName} | 
[**database_accounts_delete_mongo_db_database**](DefaultApi.md#database_accounts_delete_mongo_db_database) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName} | 
[**database_accounts_delete_sql_container**](DefaultApi.md#database_accounts_delete_sql_container) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/containers/{containerName} | 
[**database_accounts_delete_sql_database**](DefaultApi.md#database_accounts_delete_sql_database) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName} | 
[**database_accounts_delete_table**](DefaultApi.md#database_accounts_delete_table) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/table/tables/{tableName} | 
[**database_accounts_failover_priority_change**](DefaultApi.md#database_accounts_failover_priority_change) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/failoverPriorityChange | 
[**database_accounts_get**](DefaultApi.md#database_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_accounts_get_cassandra_keyspace**](DefaultApi.md#database_accounts_get_cassandra_keyspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName} | 
[**database_accounts_get_cassandra_keyspace_throughput**](DefaultApi.md#database_accounts_get_cassandra_keyspace_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/settings/throughput | 
[**database_accounts_get_cassandra_table**](DefaultApi.md#database_accounts_get_cassandra_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/tables/{tableName} | 
[**database_accounts_get_cassandra_table_throughput**](DefaultApi.md#database_accounts_get_cassandra_table_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/tables/{tableName}/settings/throughput | 
[**database_accounts_get_gremlin_database**](DefaultApi.md#database_accounts_get_gremlin_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName} | 
[**database_accounts_get_gremlin_database_throughput**](DefaultApi.md#database_accounts_get_gremlin_database_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/settings/throughput | 
[**database_accounts_get_gremlin_graph**](DefaultApi.md#database_accounts_get_gremlin_graph) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/graphs/{graphName} | 
[**database_accounts_get_gremlin_graph_throughput**](DefaultApi.md#database_accounts_get_gremlin_graph_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/graphs/{graphName}/settings/throughput | 
[**database_accounts_get_mongo_db_collection**](DefaultApi.md#database_accounts_get_mongo_db_collection) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/collections/{collectionName} | 
[**database_accounts_get_mongo_db_collection_throughput**](DefaultApi.md#database_accounts_get_mongo_db_collection_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/collections/{collectionName}/settings/throughput | 
[**database_accounts_get_mongo_db_database**](DefaultApi.md#database_accounts_get_mongo_db_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName} | 
[**database_accounts_get_mongo_db_database_throughput**](DefaultApi.md#database_accounts_get_mongo_db_database_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/settings/throughput | 
[**database_accounts_get_read_only_keys**](DefaultApi.md#database_accounts_get_read_only_keys) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys | 
[**database_accounts_get_sql_container**](DefaultApi.md#database_accounts_get_sql_container) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/containers/{containerName} | 
[**database_accounts_get_sql_container_throughput**](DefaultApi.md#database_accounts_get_sql_container_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/containers/{containerName}/settings/throughput | 
[**database_accounts_get_sql_database**](DefaultApi.md#database_accounts_get_sql_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName} | 
[**database_accounts_get_sql_database_throughput**](DefaultApi.md#database_accounts_get_sql_database_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/settings/throughput | 
[**database_accounts_get_table**](DefaultApi.md#database_accounts_get_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/table/tables/{tableName} | 
[**database_accounts_get_table_throughput**](DefaultApi.md#database_accounts_get_table_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/table/tables/{tableName}/settings/throughput | 
[**database_accounts_list**](DefaultApi.md#database_accounts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/databaseAccounts | 
[**database_accounts_list_by_resource_group**](DefaultApi.md#database_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts | 
[**database_accounts_list_cassandra_keyspaces**](DefaultApi.md#database_accounts_list_cassandra_keyspaces) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces | 
[**database_accounts_list_cassandra_tables**](DefaultApi.md#database_accounts_list_cassandra_tables) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/tables | 
[**database_accounts_list_connection_strings**](DefaultApi.md#database_accounts_list_connection_strings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listConnectionStrings | 
[**database_accounts_list_gremlin_databases**](DefaultApi.md#database_accounts_list_gremlin_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases | 
[**database_accounts_list_gremlin_graphs**](DefaultApi.md#database_accounts_list_gremlin_graphs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/graphs | 
[**database_accounts_list_keys**](DefaultApi.md#database_accounts_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listKeys | 
[**database_accounts_list_metric_definitions**](DefaultApi.md#database_accounts_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metricDefinitions | 
[**database_accounts_list_metrics**](DefaultApi.md#database_accounts_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metrics | 
[**database_accounts_list_mongo_db_collections**](DefaultApi.md#database_accounts_list_mongo_db_collections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/collections | 
[**database_accounts_list_mongo_db_databases**](DefaultApi.md#database_accounts_list_mongo_db_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases | 
[**database_accounts_list_read_only_keys**](DefaultApi.md#database_accounts_list_read_only_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys | 
[**database_accounts_list_sql_containers**](DefaultApi.md#database_accounts_list_sql_containers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/containers | 
[**database_accounts_list_sql_databases**](DefaultApi.md#database_accounts_list_sql_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases | 
[**database_accounts_list_tables**](DefaultApi.md#database_accounts_list_tables) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/table/tables | 
[**database_accounts_list_usages**](DefaultApi.md#database_accounts_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/usages | 
[**database_accounts_offline_region**](DefaultApi.md#database_accounts_offline_region) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/offlineRegion | 
[**database_accounts_online_region**](DefaultApi.md#database_accounts_online_region) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/onlineRegion | 
[**database_accounts_patch**](DefaultApi.md#database_accounts_patch) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_accounts_regenerate_key**](DefaultApi.md#database_accounts_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/regenerateKey | 
[**database_accounts_update_cassandra_keyspace_throughput**](DefaultApi.md#database_accounts_update_cassandra_keyspace_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/settings/throughput | 
[**database_accounts_update_cassandra_table_throughput**](DefaultApi.md#database_accounts_update_cassandra_table_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/cassandra/keyspaces/{keyspaceName}/tables/{tableName}/settings/throughput | 
[**database_accounts_update_gremlin_database_throughput**](DefaultApi.md#database_accounts_update_gremlin_database_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/settings/throughput | 
[**database_accounts_update_gremlin_graph_throughput**](DefaultApi.md#database_accounts_update_gremlin_graph_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/gremlin/databases/{databaseName}/graphs/{graphName}/settings/throughput | 
[**database_accounts_update_mongo_db_collection_throughput**](DefaultApi.md#database_accounts_update_mongo_db_collection_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/collections/{collectionName}/settings/throughput | 
[**database_accounts_update_mongo_db_database_throughput**](DefaultApi.md#database_accounts_update_mongo_db_database_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/mongodb/databases/{databaseName}/settings/throughput | 
[**database_accounts_update_sql_container_throughput**](DefaultApi.md#database_accounts_update_sql_container_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/containers/{containerName}/settings/throughput | 
[**database_accounts_update_sql_database_throughput**](DefaultApi.md#database_accounts_update_sql_database_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/sql/databases/{databaseName}/settings/throughput | 
[**database_accounts_update_table_throughput**](DefaultApi.md#database_accounts_update_table_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/apis/table/tables/{tableName}/settings/throughput | 
[**database_list_metric_definitions**](DefaultApi.md#database_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metricDefinitions | 
[**database_list_metrics**](DefaultApi.md#database_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metrics | 
[**database_list_usages**](DefaultApi.md#database_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/usages | 
[**partition_key_range_id_list_metrics**](DefaultApi.md#partition_key_range_id_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics | 
[**partition_key_range_id_region_list_metrics**](DefaultApi.md#partition_key_range_id_region_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics | 
[**percentile_list_metrics**](DefaultApi.md#percentile_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/percentile/metrics | 
[**percentile_source_target_list_metrics**](DefaultApi.md#percentile_source_target_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sourceRegion/{sourceRegion}/targetRegion/{targetRegion}/percentile/metrics | 
[**percentile_target_list_metrics**](DefaultApi.md#percentile_target_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/targetRegion/{targetRegion}/percentile/metrics | 


# **collection_list_metric_definitions**
> MetricDefinitionsListResult collection_list_metric_definitions(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version)



Retrieves metric definitions for the given collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definitions_list_result import MetricDefinitionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.collection_list_metric_definitions(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version)
        print("The response of DefaultApi->collection_list_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_list_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MetricDefinitionsListResult**](MetricDefinitionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric definitions for the collection were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_list_metrics**
> MetricListResult collection_list_metrics(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter)



Retrieves the metrics determined by the given filter for the given database account and collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_list_result import MetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.collection_list_metrics(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter)
        print("The response of DefaultApi->collection_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**MetricListResult**](MetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metrics for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_list_usages**
> UsagesResult collection_list_usages(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter=filter)



Retrieves the usages (most recent storage data) for the given collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usages_result import UsagesResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). (optional)

    try:
        api_response = api_instance.collection_list_usages(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter=filter)
        print("The response of DefaultApi->collection_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). | [optional] 

### Return type

[**UsagesResult**](UsagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The usages for the collection were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_partition_list_metrics**
> PartitionMetricListResult collection_partition_list_metrics(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter)



Retrieves the metrics determined by the given filter for the given collection, split by partition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.partition_metric_list_result import PartitionMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.collection_partition_list_metrics(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter)
        print("The response of DefaultApi->collection_partition_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_partition_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PartitionMetricListResult**](PartitionMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition-level metrics for the collection were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_partition_list_usages**
> PartitionUsagesResult collection_partition_list_usages(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter=filter)



Retrieves the usages (most recent storage data) for the given collection, split by partition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.partition_usages_result import PartitionUsagesResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). (optional)

    try:
        api_response = api_instance.collection_partition_list_usages(subscription_id, resource_group_name, account_name, database_rid, collection_rid, api_version, filter=filter)
        print("The response of DefaultApi->collection_partition_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_partition_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). | [optional] 

### Return type

[**PartitionUsagesResult**](PartitionUsagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The usages for the collection, per partition were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_partition_region_list_metrics**
> PartitionMetricListResult collection_partition_region_list_metrics(subscription_id, resource_group_name, account_name, region, database_rid, collection_rid, api_version, filter)



Retrieves the metrics determined by the given filter for the given collection and region, split by partition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.partition_metric_list_result import PartitionMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    region = 'region_example' # str | Cosmos DB region, with spaces between words and each word capitalized.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.collection_partition_region_list_metrics(subscription_id, resource_group_name, account_name, region, database_rid, collection_rid, api_version, filter)
        print("The response of DefaultApi->collection_partition_region_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_partition_region_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **region** | **str**| Cosmos DB region, with spaces between words and each word capitalized. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PartitionMetricListResult**](PartitionMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition-level metrics for the collection and region were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_region_list_metrics**
> MetricListResult collection_region_list_metrics(subscription_id, resource_group_name, account_name, region, database_rid, collection_rid, api_version, filter)



Retrieves the metrics determined by the given filter for the given database account, collection and region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_list_result import MetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    region = 'region_example' # str | Cosmos DB region, with spaces between words and each word capitalized.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.collection_region_list_metrics(subscription_id, resource_group_name, account_name, region, database_rid, collection_rid, api_version, filter)
        print("The response of DefaultApi->collection_region_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->collection_region_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **region** | **str**| Cosmos DB region, with spaces between words and each word capitalized. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**MetricListResult**](MetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metrics for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_account_region_list_metrics**
> MetricListResult database_account_region_list_metrics(subscription_id, resource_group_name, account_name, region, api_version, filter)



Retrieves the metrics determined by the given filter for the given database account and region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_list_result import MetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    region = 'region_example' # str | Cosmos DB region, with spaces between words and each word capitalized.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.database_account_region_list_metrics(subscription_id, resource_group_name, account_name, region, api_version, filter)
        print("The response of DefaultApi->database_account_region_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_account_region_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **region** | **str**| Cosmos DB region, with spaces between words and each word capitalized. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**MetricListResult**](MetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metrics for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_check_name_exists**
> database_accounts_check_name_exists(account_name, api_version)



Checks that the Azure Cosmos DB account name already exists. A valid account name may contain only lowercase letters, numbers, and the '-' character, and must be between 3 and 50 characters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_check_name_exists(account_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_check_name_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The account name is valid but is already in use. |  -  |
**404** | Not Found. The account name is available and valid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_or_update**
> DatabaseAccount database_accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, create_update_parameters)



Creates or updates an Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account import DatabaseAccount
from openapi_client.models.database_account_create_update_parameters import DatabaseAccountCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_parameters = openapi_client.DatabaseAccountCreateUpdateParameters() # DatabaseAccountCreateUpdateParameters | The parameters to provide for the current database account.

    try:
        api_response = api_instance.database_accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, create_update_parameters)
        print("The response of DefaultApi->database_accounts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_parameters** | [**DatabaseAccountCreateUpdateParameters**](DatabaseAccountCreateUpdateParameters.md)| The parameters to provide for the current database account. | 

### Return type

[**DatabaseAccount**](DatabaseAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The database account create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_cassandra_keyspace**
> CassandraKeyspace database_accounts_create_update_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version, create_update_cassandra_keyspace_parameters)



Create or update an Azure Cosmos DB Cassandra keyspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_keyspace import CassandraKeyspace
from openapi_client.models.cassandra_keyspace_create_update_parameters import CassandraKeyspaceCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_cassandra_keyspace_parameters = openapi_client.CassandraKeyspaceCreateUpdateParameters() # CassandraKeyspaceCreateUpdateParameters | The parameters to provide for the current Cassandra keyspace.

    try:
        api_response = api_instance.database_accounts_create_update_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version, create_update_cassandra_keyspace_parameters)
        print("The response of DefaultApi->database_accounts_create_update_cassandra_keyspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_cassandra_keyspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_cassandra_keyspace_parameters** | [**CassandraKeyspaceCreateUpdateParameters**](CassandraKeyspaceCreateUpdateParameters.md)| The parameters to provide for the current Cassandra keyspace. | 

### Return type

[**CassandraKeyspace**](CassandraKeyspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Cassandra keyspace create or update operation was completed successfully. |  -  |
**202** | The Cassandra keyspace create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_cassandra_table**
> CassandraTable database_accounts_create_update_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, create_update_cassandra_table_parameters)



Create or update an Azure Cosmos DB Cassandra Table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_table import CassandraTable
from openapi_client.models.cassandra_table_create_update_parameters import CassandraTableCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_cassandra_table_parameters = openapi_client.CassandraTableCreateUpdateParameters() # CassandraTableCreateUpdateParameters | The parameters to provide for the current Cassandra Table.

    try:
        api_response = api_instance.database_accounts_create_update_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, create_update_cassandra_table_parameters)
        print("The response of DefaultApi->database_accounts_create_update_cassandra_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_cassandra_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_cassandra_table_parameters** | [**CassandraTableCreateUpdateParameters**](CassandraTableCreateUpdateParameters.md)| The parameters to provide for the current Cassandra Table. | 

### Return type

[**CassandraTable**](CassandraTable.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Cassandra Table create or update operation was completed successfully. |  -  |
**202** | The Cassandra Table create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_gremlin_database**
> GremlinDatabase database_accounts_create_update_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_gremlin_database_parameters)



Create or update an Azure Cosmos DB Gremlin database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_database import GremlinDatabase
from openapi_client.models.gremlin_database_create_update_parameters import GremlinDatabaseCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_gremlin_database_parameters = openapi_client.GremlinDatabaseCreateUpdateParameters() # GremlinDatabaseCreateUpdateParameters | The parameters to provide for the current Gremlin database.

    try:
        api_response = api_instance.database_accounts_create_update_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_gremlin_database_parameters)
        print("The response of DefaultApi->database_accounts_create_update_gremlin_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_gremlin_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_gremlin_database_parameters** | [**GremlinDatabaseCreateUpdateParameters**](GremlinDatabaseCreateUpdateParameters.md)| The parameters to provide for the current Gremlin database. | 

### Return type

[**GremlinDatabase**](GremlinDatabase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Gremlin database create or update operation was completed successfully. |  -  |
**202** | The Gremlin database create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_gremlin_graph**
> GremlinGraph database_accounts_create_update_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, create_update_gremlin_graph_parameters)



Create or update an Azure Cosmos DB Gremlin graph

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_graph import GremlinGraph
from openapi_client.models.gremlin_graph_create_update_parameters import GremlinGraphCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    graph_name = 'graph_name_example' # str | Cosmos DB graph name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_gremlin_graph_parameters = openapi_client.GremlinGraphCreateUpdateParameters() # GremlinGraphCreateUpdateParameters | The parameters to provide for the current Gremlin graph.

    try:
        api_response = api_instance.database_accounts_create_update_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, create_update_gremlin_graph_parameters)
        print("The response of DefaultApi->database_accounts_create_update_gremlin_graph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_gremlin_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_gremlin_graph_parameters** | [**GremlinGraphCreateUpdateParameters**](GremlinGraphCreateUpdateParameters.md)| The parameters to provide for the current Gremlin graph. | 

### Return type

[**GremlinGraph**](GremlinGraph.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Gremlin graph create or update operation was completed successfully. |  -  |
**202** | The Gremlin graph create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_mongo_db_collection**
> MongoDBCollection database_accounts_create_update_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, create_update_mongo_db_collection_parameters)



Create or update an Azure Cosmos DB MongoDB Collection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_collection import MongoDBCollection
from openapi_client.models.mongo_db_collection_create_update_parameters import MongoDBCollectionCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    collection_name = 'collection_name_example' # str | Cosmos DB collection name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_mongo_db_collection_parameters = openapi_client.MongoDBCollectionCreateUpdateParameters() # MongoDBCollectionCreateUpdateParameters | The parameters to provide for the current MongoDB Collection.

    try:
        api_response = api_instance.database_accounts_create_update_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, create_update_mongo_db_collection_parameters)
        print("The response of DefaultApi->database_accounts_create_update_mongo_db_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_mongo_db_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_mongo_db_collection_parameters** | [**MongoDBCollectionCreateUpdateParameters**](MongoDBCollectionCreateUpdateParameters.md)| The parameters to provide for the current MongoDB Collection. | 

### Return type

[**MongoDBCollection**](MongoDBCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The MongoDB Collection create or update operation was completed successfully. |  -  |
**202** | The MongoDB Collection create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_mongo_db_database**
> MongoDBDatabase database_accounts_create_update_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_mongo_db_database_parameters)



Create or updates Azure Cosmos DB MongoDB database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_database import MongoDBDatabase
from openapi_client.models.mongo_db_database_create_update_parameters import MongoDBDatabaseCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_mongo_db_database_parameters = openapi_client.MongoDBDatabaseCreateUpdateParameters() # MongoDBDatabaseCreateUpdateParameters | The parameters to provide for the current MongoDB database.

    try:
        api_response = api_instance.database_accounts_create_update_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_mongo_db_database_parameters)
        print("The response of DefaultApi->database_accounts_create_update_mongo_db_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_mongo_db_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_mongo_db_database_parameters** | [**MongoDBDatabaseCreateUpdateParameters**](MongoDBDatabaseCreateUpdateParameters.md)| The parameters to provide for the current MongoDB database. | 

### Return type

[**MongoDBDatabase**](MongoDBDatabase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The MongoDB database create or update operation was completed successfully. |  -  |
**202** | The MongoDB database create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_sql_container**
> SqlContainer database_accounts_create_update_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, create_update_sql_container_parameters)



Create or update an Azure Cosmos DB SQL container

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_container import SqlContainer
from openapi_client.models.sql_container_create_update_parameters import SqlContainerCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    container_name = 'container_name_example' # str | Cosmos DB container name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_sql_container_parameters = openapi_client.SqlContainerCreateUpdateParameters() # SqlContainerCreateUpdateParameters | The parameters to provide for the current SQL container.

    try:
        api_response = api_instance.database_accounts_create_update_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, create_update_sql_container_parameters)
        print("The response of DefaultApi->database_accounts_create_update_sql_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_sql_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_sql_container_parameters** | [**SqlContainerCreateUpdateParameters**](SqlContainerCreateUpdateParameters.md)| The parameters to provide for the current SQL container. | 

### Return type

[**SqlContainer**](SqlContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL container create or update operation was completed successfully. |  -  |
**202** | The SQL container create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_sql_database**
> SqlDatabase database_accounts_create_update_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_sql_database_parameters)



Create or update an Azure Cosmos DB SQL database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_database import SqlDatabase
from openapi_client.models.sql_database_create_update_parameters import SqlDatabaseCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_sql_database_parameters = openapi_client.SqlDatabaseCreateUpdateParameters() # SqlDatabaseCreateUpdateParameters | The parameters to provide for the current SQL database.

    try:
        api_response = api_instance.database_accounts_create_update_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_sql_database_parameters)
        print("The response of DefaultApi->database_accounts_create_update_sql_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_sql_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_sql_database_parameters** | [**SqlDatabaseCreateUpdateParameters**](SqlDatabaseCreateUpdateParameters.md)| The parameters to provide for the current SQL database. | 

### Return type

[**SqlDatabase**](SqlDatabase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL database create or update operation was completed successfully. |  -  |
**202** | The SQL database create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_create_update_table**
> Table database_accounts_create_update_table(subscription_id, resource_group_name, account_name, table_name, api_version, create_update_table_parameters)



Create or update an Azure Cosmos DB Table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.table import Table
from openapi_client.models.table_create_update_parameters import TableCreateUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    create_update_table_parameters = openapi_client.TableCreateUpdateParameters() # TableCreateUpdateParameters | The parameters to provide for the current Table.

    try:
        api_response = api_instance.database_accounts_create_update_table(subscription_id, resource_group_name, account_name, table_name, api_version, create_update_table_parameters)
        print("The response of DefaultApi->database_accounts_create_update_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_create_update_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **create_update_table_parameters** | [**TableCreateUpdateParameters**](TableCreateUpdateParameters.md)| The parameters to provide for the current Table. | 

### Return type

[**Table**](Table.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Table create or update operation was completed successfully. |  -  |
**202** | The Table create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete**
> database_accounts_delete(subscription_id, resource_group_name, account_name, api_version)



Deletes an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The database account delete operation will complete asynchronously. |  -  |
**204** | The specified account does not exist in the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_cassandra_keyspace**
> database_accounts_delete_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



Deletes an existing Azure Cosmos DB Cassandra keyspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_cassandra_keyspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The Cassandra keyspace delete operation will complete asynchronously. |  -  |
**204** | The Cassandra keyspace delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_cassandra_table**
> database_accounts_delete_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)



Deletes an existing Azure Cosmos DB Cassandra table.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_cassandra_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The Cassandra table delete operation will complete asynchronously. |  -  |
**204** | The Cassandra table delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_gremlin_database**
> database_accounts_delete_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Deletes an existing Azure Cosmos DB Gremlin database.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_gremlin_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The Gremlin database delete operation will complete asynchronously. |  -  |
**204** | The Gremlin database delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_gremlin_graph**
> database_accounts_delete_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)



Deletes an existing Azure Cosmos DB Gremlin graph.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    graph_name = 'graph_name_example' # str | Cosmos DB graph name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_gremlin_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The Gremlin graph delete operation will complete asynchronously. |  -  |
**204** | The Gremlin graph delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_mongo_db_collection**
> database_accounts_delete_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)



Deletes an existing Azure Cosmos DB MongoDB Collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    collection_name = 'collection_name_example' # str | Cosmos DB collection name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_mongo_db_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The MongoDB collection delete operation will complete asynchronously. |  -  |
**204** | The MongoDB collection delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_mongo_db_database**
> database_accounts_delete_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Deletes an existing Azure Cosmos DB MongoDB database.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_mongo_db_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The MongoDB database delete operation will complete asynchronously. |  -  |
**204** | The MongoDB database delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_sql_container**
> database_accounts_delete_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Deletes an existing Azure Cosmos DB SQL container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    container_name = 'container_name_example' # str | Cosmos DB container name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_sql_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The SQL container delete operation will complete asynchronously. |  -  |
**204** | The SQL container delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_sql_database**
> database_accounts_delete_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Deletes an existing Azure Cosmos DB SQL database.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_sql_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The SQL database delete operation will complete asynchronously. |  -  |
**204** | The SQL database delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_delete_table**
> database_accounts_delete_table(subscription_id, resource_group_name, account_name, table_name, api_version)



Deletes an existing Azure Cosmos DB Table.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_instance.database_accounts_delete_table(subscription_id, resource_group_name, account_name, table_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_delete_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The Table delete operation will complete asynchronously. |  -  |
**204** | The Table delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_failover_priority_change**
> database_accounts_failover_priority_change(subscription_id, resource_group_name, account_name, api_version, failover_parameters)



Changes the failover priority for the Azure Cosmos DB database account. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.failover_policies import FailoverPolicies
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    failover_parameters = openapi_client.FailoverPolicies() # FailoverPolicies | The new failover policies for the database account.

    try:
        api_instance.database_accounts_failover_priority_change(subscription_id, resource_group_name, account_name, api_version, failover_parameters)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_failover_priority_change: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **failover_parameters** | [**FailoverPolicies**](FailoverPolicies.md)| The new failover policies for the database account. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. The failover policy change operation will complete asynchronously. |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get**
> DatabaseAccount database_accounts_get(subscription_id, resource_group_name, account_name, api_version)



Retrieves the properties of an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account import DatabaseAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**DatabaseAccount**](DatabaseAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The database account properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_cassandra_keyspace**
> CassandraKeyspace database_accounts_get_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_keyspace import CassandraKeyspace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
        print("The response of DefaultApi->database_accounts_get_cassandra_keyspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_cassandra_keyspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**CassandraKeyspace**](CassandraKeyspace.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Cassandra keyspace property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_cassandra_keyspace_throughput**
> Throughput database_accounts_get_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
        print("The response of DefaultApi->database_accounts_get_cassandra_keyspace_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_cassandra_keyspace_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Cassandra Keyspace was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_cassandra_table**
> CassandraTable database_accounts_get_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)



Gets the Cassandra table under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_table import CassandraTable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)
        print("The response of DefaultApi->database_accounts_get_cassandra_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_cassandra_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**CassandraTable**](CassandraTable.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Cassandra table property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_cassandra_table_throughput**
> Throughput database_accounts_get_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)



Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)
        print("The response of DefaultApi->database_accounts_get_cassandra_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_cassandra_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Cassandra table was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_gremlin_database**
> GremlinDatabase database_accounts_get_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_database import GremlinDatabase
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_get_gremlin_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_gremlin_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**GremlinDatabase**](GremlinDatabase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Gremlin database property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_gremlin_database_throughput**
> Throughput database_accounts_get_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_get_gremlin_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_gremlin_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Gremlin database was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_gremlin_graph**
> GremlinGraph database_accounts_get_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)



Gets the Gremlin graph under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_graph import GremlinGraph
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    graph_name = 'graph_name_example' # str | Cosmos DB graph name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)
        print("The response of DefaultApi->database_accounts_get_gremlin_graph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_gremlin_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**GremlinGraph**](GremlinGraph.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Gremlin graph property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_gremlin_graph_throughput**
> Throughput database_accounts_get_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)



Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    graph_name = 'graph_name_example' # str | Cosmos DB graph name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)
        print("The response of DefaultApi->database_accounts_get_gremlin_graph_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_gremlin_graph_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Gremlin graph was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_mongo_db_collection**
> MongoDBCollection database_accounts_get_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)



Gets the MongoDB collection under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_collection import MongoDBCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    collection_name = 'collection_name_example' # str | Cosmos DB collection name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)
        print("The response of DefaultApi->database_accounts_get_mongo_db_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_mongo_db_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MongoDBCollection**](MongoDBCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The MongoDB collection property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_mongo_db_collection_throughput**
> Throughput database_accounts_get_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)



Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    collection_name = 'collection_name_example' # str | Cosmos DB collection name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)
        print("The response of DefaultApi->database_accounts_get_mongo_db_collection_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_mongo_db_collection_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the MongoDB collection was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_mongo_db_database**
> MongoDBDatabase database_accounts_get_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_database import MongoDBDatabase
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_get_mongo_db_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_mongo_db_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MongoDBDatabase**](MongoDBDatabase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The MongoDB database property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_mongo_db_database_throughput**
> Throughput database_accounts_get_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_get_mongo_db_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_mongo_db_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the MongoDB database was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_read_only_keys**
> DatabaseAccountListReadOnlyKeysResult database_accounts_get_read_only_keys(subscription_id, resource_group_name, account_name, api_version)



Lists the read-only access keys for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_list_read_only_keys_result import DatabaseAccountListReadOnlyKeysResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_read_only_keys(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_get_read_only_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_read_only_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**DatabaseAccountListReadOnlyKeysResult**](DatabaseAccountListReadOnlyKeysResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_sql_container**
> SqlContainer database_accounts_get_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Gets the SQL container under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_container import SqlContainer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    container_name = 'container_name_example' # str | Cosmos DB container name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->database_accounts_get_sql_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_sql_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**SqlContainer**](SqlContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL container property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_sql_container_throughput**
> Throughput database_accounts_get_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    container_name = 'container_name_example' # str | Cosmos DB container name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->database_accounts_get_sql_container_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_sql_container_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the SQL container was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_sql_database**
> SqlDatabase database_accounts_get_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the SQL database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_database import SqlDatabase
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_get_sql_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_sql_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**SqlDatabase**](SqlDatabase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL database property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_sql_database_throughput**
> Throughput database_accounts_get_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_get_sql_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_sql_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the SQL database was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_table**
> Table database_accounts_get_table(subscription_id, resource_group_name, account_name, table_name, api_version)



Gets the Tables under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.table import Table
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_table(subscription_id, resource_group_name, account_name, table_name, api_version)
        print("The response of DefaultApi->database_accounts_get_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Table**](Table.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Table property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_get_table_throughput**
> Throughput database_accounts_get_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version)



Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_get_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version)
        print("The response of DefaultApi->database_accounts_get_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_get_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Table was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list**
> DatabaseAccountsListResult database_accounts_list(api_version, subscription_id)



Lists all the Azure Cosmos DB database accounts available under the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_accounts_list_result import DatabaseAccountsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.

    try:
        api_response = api_instance.database_accounts_list(api_version, subscription_id)
        print("The response of DefaultApi->database_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **subscription_id** | **str**| Azure subscription ID. | 

### Return type

[**DatabaseAccountsListResult**](DatabaseAccountsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_by_resource_group**
> DatabaseAccountsListResult database_accounts_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists all the Azure Cosmos DB database accounts available under the given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_accounts_list_result import DatabaseAccountsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.

    try:
        api_response = api_instance.database_accounts_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of DefaultApi->database_accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **subscription_id** | **str**| Azure subscription ID. | 

### Return type

[**DatabaseAccountsListResult**](DatabaseAccountsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_cassandra_keyspaces**
> CassandraKeyspaceListResult database_accounts_list_cassandra_keyspaces(subscription_id, resource_group_name, account_name, api_version)



Lists the Cassandra keyspaces under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_keyspace_list_result import CassandraKeyspaceListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_cassandra_keyspaces(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_cassandra_keyspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_cassandra_keyspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**CassandraKeyspaceListResult**](CassandraKeyspaceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Cassandra keyspace properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_cassandra_tables**
> CassandraTableListResult database_accounts_list_cassandra_tables(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



Lists the Cassandra table under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_table_list_result import CassandraTableListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_cassandra_tables(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
        print("The response of DefaultApi->database_accounts_list_cassandra_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_cassandra_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**CassandraTableListResult**](CassandraTableListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Cassandra table properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_connection_strings**
> DatabaseAccountListConnectionStringsResult database_accounts_list_connection_strings(subscription_id, resource_group_name, account_name, api_version)



Lists the connection strings for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_list_connection_strings_result import DatabaseAccountListConnectionStringsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_connection_strings(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_connection_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_connection_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**DatabaseAccountListConnectionStringsResult**](DatabaseAccountListConnectionStringsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_gremlin_databases**
> GremlinDatabaseListResult database_accounts_list_gremlin_databases(subscription_id, resource_group_name, account_name, api_version)



Lists the Gremlin databases under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_database_list_result import GremlinDatabaseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_gremlin_databases(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_gremlin_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_gremlin_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**GremlinDatabaseListResult**](GremlinDatabaseListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Gremlin database properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_gremlin_graphs**
> GremlinGraphListResult database_accounts_list_gremlin_graphs(subscription_id, resource_group_name, account_name, database_name, api_version)



Lists the Gremlin graph under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_graph_list_result import GremlinGraphListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_gremlin_graphs(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_list_gremlin_graphs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_gremlin_graphs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**GremlinGraphListResult**](GremlinGraphListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Gremlin graph properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_keys**
> DatabaseAccountListKeysResult database_accounts_list_keys(subscription_id, resource_group_name, account_name, api_version)



Lists the access keys for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_list_keys_result import DatabaseAccountListKeysResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_keys(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**DatabaseAccountListKeysResult**](DatabaseAccountListKeysResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_metric_definitions**
> MetricDefinitionsListResult database_accounts_list_metric_definitions(subscription_id, resource_group_name, account_name, api_version)



Retrieves metric definitions for the given database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definitions_list_result import MetricDefinitionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_metric_definitions(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MetricDefinitionsListResult**](MetricDefinitionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric definitions for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_metrics**
> MetricListResult database_accounts_list_metrics(subscription_id, resource_group_name, account_name, api_version, filter)



Retrieves the metrics determined by the given filter for the given database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_list_result import MetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.database_accounts_list_metrics(subscription_id, resource_group_name, account_name, api_version, filter)
        print("The response of DefaultApi->database_accounts_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**MetricListResult**](MetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metrics for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_mongo_db_collections**
> MongoDBCollectionListResult database_accounts_list_mongo_db_collections(subscription_id, resource_group_name, account_name, database_name, api_version)



Lists the MongoDB collection under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_collection_list_result import MongoDBCollectionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_mongo_db_collections(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_list_mongo_db_collections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_mongo_db_collections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MongoDBCollectionListResult**](MongoDBCollectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The MongoDB collection properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_mongo_db_databases**
> MongoDBDatabaseListResult database_accounts_list_mongo_db_databases(subscription_id, resource_group_name, account_name, api_version)



Lists the MongoDB databases under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_database_list_result import MongoDBDatabaseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_mongo_db_databases(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_mongo_db_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_mongo_db_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MongoDBDatabaseListResult**](MongoDBDatabaseListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The MongoDB database properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_read_only_keys**
> DatabaseAccountListReadOnlyKeysResult database_accounts_list_read_only_keys(subscription_id, resource_group_name, account_name, api_version)



Lists the read-only access keys for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_list_read_only_keys_result import DatabaseAccountListReadOnlyKeysResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_read_only_keys(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_read_only_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_read_only_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**DatabaseAccountListReadOnlyKeysResult**](DatabaseAccountListReadOnlyKeysResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_sql_containers**
> SqlContainerListResult database_accounts_list_sql_containers(subscription_id, resource_group_name, account_name, database_name, api_version)



Lists the SQL container under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_container_list_result import SqlContainerListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_sql_containers(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->database_accounts_list_sql_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_sql_containers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**SqlContainerListResult**](SqlContainerListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL container properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_sql_databases**
> SqlDatabaseListResult database_accounts_list_sql_databases(subscription_id, resource_group_name, account_name, api_version)



Lists the SQL databases under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_database_list_result import SqlDatabaseListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_sql_databases(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_sql_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_sql_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**SqlDatabaseListResult**](SqlDatabaseListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL database properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_tables**
> TableListResult database_accounts_list_tables(subscription_id, resource_group_name, account_name, api_version)



Lists the Tables under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.table_list_result import TableListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_accounts_list_tables(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->database_accounts_list_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**TableListResult**](TableListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Table properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_list_usages**
> UsagesResult database_accounts_list_usages(subscription_id, resource_group_name, account_name, api_version, filter=filter)



Retrieves the usages (most recent data) for the given database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usages_result import UsagesResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). (optional)

    try:
        api_response = api_instance.database_accounts_list_usages(subscription_id, resource_group_name, account_name, api_version, filter=filter)
        print("The response of DefaultApi->database_accounts_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). | [optional] 

### Return type

[**UsagesResult**](UsagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The usages for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_offline_region**
> database_accounts_offline_region(subscription_id, resource_group_name, account_name, api_version, region_parameter_for_offline)



Offline the specified region for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.region_for_online_offline import RegionForOnlineOffline
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    region_parameter_for_offline = openapi_client.RegionForOnlineOffline() # RegionForOnlineOffline | Cosmos DB region to offline for the database account.

    try:
        api_instance.database_accounts_offline_region(subscription_id, resource_group_name, account_name, api_version, region_parameter_for_offline)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_offline_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **region_parameter_for_offline** | [**RegionForOnlineOffline**](RegionForOnlineOffline.md)| Cosmos DB region to offline for the database account. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The offline region operation is completed successfully. |  -  |
**202** | Accepted. The offline region operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_online_region**
> database_accounts_online_region(subscription_id, resource_group_name, account_name, api_version, region_parameter_for_online)



Online the specified region for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.region_for_online_offline import RegionForOnlineOffline
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    region_parameter_for_online = openapi_client.RegionForOnlineOffline() # RegionForOnlineOffline | Cosmos DB region to online for the database account.

    try:
        api_instance.database_accounts_online_region(subscription_id, resource_group_name, account_name, api_version, region_parameter_for_online)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_online_region: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **region_parameter_for_online** | [**RegionForOnlineOffline**](RegionForOnlineOffline.md)| Cosmos DB region to online for the database account. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The online region operation is completed successfully. |  -  |
**202** | Accepted. The online region operation will complete asynchronously. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_patch**
> DatabaseAccount database_accounts_patch(subscription_id, resource_group_name, account_name, api_version, update_parameters)



Patches the properties of an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account import DatabaseAccount
from openapi_client.models.database_account_patch_parameters import DatabaseAccountPatchParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_parameters = openapi_client.DatabaseAccountPatchParameters() # DatabaseAccountPatchParameters | The tags parameter to patch for the current database account.

    try:
        api_response = api_instance.database_accounts_patch(subscription_id, resource_group_name, account_name, api_version, update_parameters)
        print("The response of DefaultApi->database_accounts_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_parameters** | [**DatabaseAccountPatchParameters**](DatabaseAccountPatchParameters.md)| The tags parameter to patch for the current database account. | 

### Return type

[**DatabaseAccount**](DatabaseAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The properties of the database account were patched successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_regenerate_key**
> database_accounts_regenerate_key(subscription_id, resource_group_name, account_name, api_version, key_to_regenerate)



Regenerates an access key for the specified Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_regenerate_key_parameters import DatabaseAccountRegenerateKeyParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    key_to_regenerate = openapi_client.DatabaseAccountRegenerateKeyParameters() # DatabaseAccountRegenerateKeyParameters | The name of the key to regenerate.

    try:
        api_instance.database_accounts_regenerate_key(subscription_id, resource_group_name, account_name, api_version, key_to_regenerate)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **key_to_regenerate** | [**DatabaseAccountRegenerateKeyParameters**](DatabaseAccountRegenerateKeyParameters.md)| The name of the key to regenerate. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted. The regenerate key operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_cassandra_keyspace_throughput**
> Throughput database_accounts_update_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Cassandra Keyspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The RUs per second of the parameters to provide for the current Cassandra Keyspace.

    try:
        api_response = api_instance.database_accounts_update_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_cassandra_keyspace_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_cassandra_keyspace_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The RUs per second of the parameters to provide for the current Cassandra Keyspace. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Cassandra Keyspace update operation was completed successfully. |  -  |
**202** | The RUs per second of the Cassandra Keyspace update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_cassandra_table_throughput**
> Throughput database_accounts_update_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Cassandra table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    keyspace_name = 'keyspace_name_example' # str | Cosmos DB keyspace name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The RUs per second of the parameters to provide for the current Cassandra table.

    try:
        api_response = api_instance.database_accounts_update_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_cassandra_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_cassandra_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The RUs per second of the parameters to provide for the current Cassandra table. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Cassandra table update operation was completed successfully. |  -  |
**202** | The RUs per second of the Cassandra table update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_gremlin_database_throughput**
> Throughput database_accounts_update_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Gremlin database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The RUs per second of the parameters to provide for the current Gremlin database.

    try:
        api_response = api_instance.database_accounts_update_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_gremlin_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_gremlin_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The RUs per second of the parameters to provide for the current Gremlin database. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Gremlin database update operation was completed successfully. |  -  |
**202** | The RUs per second of the Gremlin database update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_gremlin_graph_throughput**
> Throughput database_accounts_update_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Gremlin graph

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    graph_name = 'graph_name_example' # str | Cosmos DB graph name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The RUs per second of the parameters to provide for the current Gremlin graph.

    try:
        api_response = api_instance.database_accounts_update_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_gremlin_graph_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_gremlin_graph_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The RUs per second of the parameters to provide for the current Gremlin graph. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Gremlin graph update operation was completed successfully. |  -  |
**202** | The RUs per second of the Gremlin graph update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_mongo_db_collection_throughput**
> Throughput database_accounts_update_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, update_throughput_parameters)



Update the RUs per second of an Azure Cosmos DB MongoDB collection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    collection_name = 'collection_name_example' # str | Cosmos DB collection name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The RUs per second of the parameters to provide for the current MongoDB collection.

    try:
        api_response = api_instance.database_accounts_update_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_mongo_db_collection_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_mongo_db_collection_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The RUs per second of the parameters to provide for the current MongoDB collection. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the MongoDB collection update operation was completed successfully. |  -  |
**202** | The RUs per second of the MongoDB collection update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_mongo_db_database_throughput**
> Throughput database_accounts_update_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)



Update RUs per second of the an Azure Cosmos DB MongoDB database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The RUs per second of the parameters to provide for the current MongoDB database.

    try:
        api_response = api_instance.database_accounts_update_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_mongo_db_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_mongo_db_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The RUs per second of the parameters to provide for the current MongoDB database. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the MongoDB database update operation was completed successfully. |  -  |
**202** | The RUs per second of the MongoDB database update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_sql_container_throughput**
> Throughput database_accounts_update_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB SQL container

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    container_name = 'container_name_example' # str | Cosmos DB container name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The parameters to provide for the RUs per second of the current SQL container.

    try:
        api_response = api_instance.database_accounts_update_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_sql_container_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_sql_container_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The parameters to provide for the RUs per second of the current SQL container. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the SQL container update operation was completed successfully. |  -  |
**202** | The RUs per second of the SQL container update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_sql_database_throughput**
> Throughput database_accounts_update_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB SQL database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_name = 'database_name_example' # str | Cosmos DB database name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The parameters to provide for the RUs per second of the current SQL database.

    try:
        api_response = api_instance.database_accounts_update_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_sql_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_sql_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The parameters to provide for the RUs per second of the current SQL database. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the SQL database update operation was completed successfully. |  -  |
**202** | The RUs per second of the SQL database update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_accounts_update_table_throughput**
> Throughput database_accounts_update_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput import Throughput
from openapi_client.models.throughput_update_parameters import ThroughputUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    table_name = 'table_name_example' # str | Cosmos DB table name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    update_throughput_parameters = openapi_client.ThroughputUpdateParameters() # ThroughputUpdateParameters | The parameters to provide for the RUs per second of the current Table.

    try:
        api_response = api_instance.database_accounts_update_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->database_accounts_update_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **update_throughput_parameters** | [**ThroughputUpdateParameters**](ThroughputUpdateParameters.md)| The parameters to provide for the RUs per second of the current Table. | 

### Return type

[**Throughput**](Throughput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RUs per second of the Table update operation was completed successfully. |  -  |
**202** | The RUs per second of the Table update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_list_metric_definitions**
> MetricDefinitionsListResult database_list_metric_definitions(subscription_id, resource_group_name, account_name, database_rid, api_version)



Retrieves metric definitions for the given database.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definitions_list_result import MetricDefinitionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.

    try:
        api_response = api_instance.database_list_metric_definitions(subscription_id, resource_group_name, account_name, database_rid, api_version)
        print("The response of DefaultApi->database_list_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_list_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 

### Return type

[**MetricDefinitionsListResult**](MetricDefinitionsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metric definitions for the database were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_list_metrics**
> MetricListResult database_list_metrics(subscription_id, resource_group_name, account_name, database_rid, api_version, filter)



Retrieves the metrics determined by the given filter for the given database account and database.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_list_result import MetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.database_list_metrics(subscription_id, resource_group_name, account_name, database_rid, api_version, filter)
        print("The response of DefaultApi->database_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**MetricListResult**](MetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metrics for the database account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **database_list_usages**
> UsagesResult database_list_usages(subscription_id, resource_group_name, account_name, database_rid, api_version, filter=filter)



Retrieves the usages (most recent data) for the given database.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usages_result import UsagesResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). (optional)

    try:
        api_response = api_instance.database_list_usages(subscription_id, resource_group_name, account_name, database_rid, api_version, filter=filter)
        print("The response of DefaultApi->database_list_usages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_list_usages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of usages to return. The supported parameter is name.value (name of the metric, can have an or of multiple names). | [optional] 

### Return type

[**UsagesResult**](UsagesResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The usages for the database were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_key_range_id_list_metrics**
> PartitionMetricListResult partition_key_range_id_list_metrics(subscription_id, resource_group_name, account_name, database_rid, collection_rid, partition_key_range_id, api_version, filter)



Retrieves the metrics determined by the given filter for the given partition key range id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.partition_metric_list_result import PartitionMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    partition_key_range_id = 'partition_key_range_id_example' # str | Partition Key Range Id for which to get data.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.partition_key_range_id_list_metrics(subscription_id, resource_group_name, account_name, database_rid, collection_rid, partition_key_range_id, api_version, filter)
        print("The response of DefaultApi->partition_key_range_id_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_key_range_id_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **partition_key_range_id** | **str**| Partition Key Range Id for which to get data. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PartitionMetricListResult**](PartitionMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition-level metrics for the partition key range id were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_key_range_id_region_list_metrics**
> PartitionMetricListResult partition_key_range_id_region_list_metrics(subscription_id, resource_group_name, account_name, region, database_rid, collection_rid, partition_key_range_id, api_version, filter)



Retrieves the metrics determined by the given filter for the given partition key range id and region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.partition_metric_list_result import PartitionMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    region = 'region_example' # str | Cosmos DB region, with spaces between words and each word capitalized.
    database_rid = 'database_rid_example' # str | Cosmos DB database rid.
    collection_rid = 'collection_rid_example' # str | Cosmos DB collection rid.
    partition_key_range_id = 'partition_key_range_id_example' # str | Partition Key Range Id for which to get data.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.partition_key_range_id_region_list_metrics(subscription_id, resource_group_name, account_name, region, database_rid, collection_rid, partition_key_range_id, api_version, filter)
        print("The response of DefaultApi->partition_key_range_id_region_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_key_range_id_region_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **region** | **str**| Cosmos DB region, with spaces between words and each word capitalized. | 
 **database_rid** | **str**| Cosmos DB database rid. | 
 **collection_rid** | **str**| Cosmos DB collection rid. | 
 **partition_key_range_id** | **str**| Partition Key Range Id for which to get data. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PartitionMetricListResult**](PartitionMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition-level metrics for the partition key range id and region were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **percentile_list_metrics**
> PercentileMetricListResult percentile_list_metrics(subscription_id, resource_group_name, account_name, api_version, filter)



Retrieves the metrics determined by the given filter for the given database account. This url is only for PBS and Replication Latency data

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.percentile_metric_list_result import PercentileMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.percentile_list_metrics(subscription_id, resource_group_name, account_name, api_version, filter)
        print("The response of DefaultApi->percentile_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->percentile_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PercentileMetricListResult**](PercentileMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The percentile metrics for the account were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **percentile_source_target_list_metrics**
> PercentileMetricListResult percentile_source_target_list_metrics(subscription_id, resource_group_name, account_name, source_region, target_region, api_version, filter)



Retrieves the metrics determined by the given filter for the given account, source and target region. This url is only for PBS and Replication Latency data

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.percentile_metric_list_result import PercentileMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    source_region = 'source_region_example' # str | Source region from which data is written. Cosmos DB region, with spaces between words and each word capitalized.
    target_region = 'target_region_example' # str | Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.percentile_source_target_list_metrics(subscription_id, resource_group_name, account_name, source_region, target_region, api_version, filter)
        print("The response of DefaultApi->percentile_source_target_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->percentile_source_target_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **source_region** | **str**| Source region from which data is written. Cosmos DB region, with spaces between words and each word capitalized. | 
 **target_region** | **str**| Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PercentileMetricListResult**](PercentileMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The percentile metrics for the account, source and target regions were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **percentile_target_list_metrics**
> PercentileMetricListResult percentile_target_list_metrics(subscription_id, resource_group_name, account_name, target_region, api_version, filter)



Retrieves the metrics determined by the given filter for the given account target region. This url is only for PBS and Replication Latency data

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.percentile_metric_list_result import PercentileMetricListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Cosmos DB database account name.
    target_region = 'target_region_example' # str | Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2015-04-08.
    filter = 'filter_example' # str | An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq.

    try:
        api_response = api_instance.percentile_target_list_metrics(subscription_id, resource_group_name, account_name, target_region, api_version, filter)
        print("The response of DefaultApi->percentile_target_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->percentile_target_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **target_region** | **str**| Target region to which data is written. Cosmos DB region, with spaces between words and each word capitalized. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2015-04-08. | 
 **filter** | **str**| An OData filter expression that describes a subset of metrics to return. The parameters that can be filtered are name.value (name of the metric, can have an or of multiple names), startTime, endTime, and timeGrain. The supported operator is eq. | 

### Return type

[**PercentileMetricListResult**](PercentileMetricListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The percentile metrics for the account and target regions were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

