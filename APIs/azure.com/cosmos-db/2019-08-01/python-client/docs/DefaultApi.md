# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cassandra_resources_create_update_cassandra_keyspace**](DefaultApi.md#cassandra_resources_create_update_cassandra_keyspace) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName} | 
[**cassandra_resources_create_update_cassandra_table**](DefaultApi.md#cassandra_resources_create_update_cassandra_table) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName} | 
[**cassandra_resources_delete_cassandra_keyspace**](DefaultApi.md#cassandra_resources_delete_cassandra_keyspace) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName} | 
[**cassandra_resources_delete_cassandra_table**](DefaultApi.md#cassandra_resources_delete_cassandra_table) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName} | 
[**cassandra_resources_get_cassandra_keyspace**](DefaultApi.md#cassandra_resources_get_cassandra_keyspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName} | 
[**cassandra_resources_get_cassandra_keyspace_throughput**](DefaultApi.md#cassandra_resources_get_cassandra_keyspace_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default | 
[**cassandra_resources_get_cassandra_table**](DefaultApi.md#cassandra_resources_get_cassandra_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName} | 
[**cassandra_resources_get_cassandra_table_throughput**](DefaultApi.md#cassandra_resources_get_cassandra_table_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default | 
[**cassandra_resources_list_cassandra_keyspaces**](DefaultApi.md#cassandra_resources_list_cassandra_keyspaces) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces | 
[**cassandra_resources_list_cassandra_tables**](DefaultApi.md#cassandra_resources_list_cassandra_tables) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables | 
[**cassandra_resources_update_cassandra_keyspace_throughput**](DefaultApi.md#cassandra_resources_update_cassandra_keyspace_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/throughputSettings/default | 
[**cassandra_resources_update_cassandra_table_throughput**](DefaultApi.md#cassandra_resources_update_cassandra_table_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/cassandraKeyspaces/{keyspaceName}/tables/{tableName}/throughputSettings/default | 
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
[**database_accounts_delete**](DefaultApi.md#database_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_accounts_failover_priority_change**](DefaultApi.md#database_accounts_failover_priority_change) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/failoverPriorityChange | 
[**database_accounts_get**](DefaultApi.md#database_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_accounts_get_read_only_keys**](DefaultApi.md#database_accounts_get_read_only_keys) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys | 
[**database_accounts_list**](DefaultApi.md#database_accounts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/databaseAccounts | 
[**database_accounts_list_by_resource_group**](DefaultApi.md#database_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts | 
[**database_accounts_list_connection_strings**](DefaultApi.md#database_accounts_list_connection_strings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listConnectionStrings | 
[**database_accounts_list_keys**](DefaultApi.md#database_accounts_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/listKeys | 
[**database_accounts_list_metric_definitions**](DefaultApi.md#database_accounts_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metricDefinitions | 
[**database_accounts_list_metrics**](DefaultApi.md#database_accounts_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/metrics | 
[**database_accounts_list_read_only_keys**](DefaultApi.md#database_accounts_list_read_only_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/readonlykeys | 
[**database_accounts_list_usages**](DefaultApi.md#database_accounts_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/usages | 
[**database_accounts_offline_region**](DefaultApi.md#database_accounts_offline_region) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/offlineRegion | 
[**database_accounts_online_region**](DefaultApi.md#database_accounts_online_region) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/onlineRegion | 
[**database_accounts_regenerate_key**](DefaultApi.md#database_accounts_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/regenerateKey | 
[**database_accounts_update**](DefaultApi.md#database_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName} | 
[**database_list_metric_definitions**](DefaultApi.md#database_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metricDefinitions | 
[**database_list_metrics**](DefaultApi.md#database_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metrics | 
[**database_list_usages**](DefaultApi.md#database_list_usages) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/usages | 
[**gremlin_resources_create_update_gremlin_database**](DefaultApi.md#gremlin_resources_create_update_gremlin_database) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName} | 
[**gremlin_resources_create_update_gremlin_graph**](DefaultApi.md#gremlin_resources_create_update_gremlin_graph) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName} | 
[**gremlin_resources_delete_gremlin_database**](DefaultApi.md#gremlin_resources_delete_gremlin_database) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName} | 
[**gremlin_resources_delete_gremlin_graph**](DefaultApi.md#gremlin_resources_delete_gremlin_graph) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName} | 
[**gremlin_resources_get_gremlin_database**](DefaultApi.md#gremlin_resources_get_gremlin_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName} | 
[**gremlin_resources_get_gremlin_database_throughput**](DefaultApi.md#gremlin_resources_get_gremlin_database_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default | 
[**gremlin_resources_get_gremlin_graph**](DefaultApi.md#gremlin_resources_get_gremlin_graph) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName} | 
[**gremlin_resources_get_gremlin_graph_throughput**](DefaultApi.md#gremlin_resources_get_gremlin_graph_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default | 
[**gremlin_resources_list_gremlin_databases**](DefaultApi.md#gremlin_resources_list_gremlin_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases | 
[**gremlin_resources_list_gremlin_graphs**](DefaultApi.md#gremlin_resources_list_gremlin_graphs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs | 
[**gremlin_resources_update_gremlin_database_throughput**](DefaultApi.md#gremlin_resources_update_gremlin_database_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/throughputSettings/default | 
[**gremlin_resources_update_gremlin_graph_throughput**](DefaultApi.md#gremlin_resources_update_gremlin_graph_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/gremlinDatabases/{databaseName}/graphs/{graphName}/throughputSettings/default | 
[**mongo_db_resources_create_update_mongo_db_collection**](DefaultApi.md#mongo_db_resources_create_update_mongo_db_collection) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName} | 
[**mongo_db_resources_create_update_mongo_db_database**](DefaultApi.md#mongo_db_resources_create_update_mongo_db_database) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName} | 
[**mongo_db_resources_delete_mongo_db_collection**](DefaultApi.md#mongo_db_resources_delete_mongo_db_collection) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName} | 
[**mongo_db_resources_delete_mongo_db_database**](DefaultApi.md#mongo_db_resources_delete_mongo_db_database) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName} | 
[**mongo_db_resources_get_mongo_db_collection**](DefaultApi.md#mongo_db_resources_get_mongo_db_collection) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName} | 
[**mongo_db_resources_get_mongo_db_collection_throughput**](DefaultApi.md#mongo_db_resources_get_mongo_db_collection_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default | 
[**mongo_db_resources_get_mongo_db_database**](DefaultApi.md#mongo_db_resources_get_mongo_db_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName} | 
[**mongo_db_resources_get_mongo_db_database_throughput**](DefaultApi.md#mongo_db_resources_get_mongo_db_database_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default | 
[**mongo_db_resources_list_mongo_db_collections**](DefaultApi.md#mongo_db_resources_list_mongo_db_collections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections | 
[**mongo_db_resources_list_mongo_db_databases**](DefaultApi.md#mongo_db_resources_list_mongo_db_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases | 
[**mongo_db_resources_update_mongo_db_collection_throughput**](DefaultApi.md#mongo_db_resources_update_mongo_db_collection_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/collections/{collectionName}/throughputSettings/default | 
[**mongo_db_resources_update_mongo_db_database_throughput**](DefaultApi.md#mongo_db_resources_update_mongo_db_database_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/mongodbDatabases/{databaseName}/throughputSettings/default | 
[**partition_key_range_id_list_metrics**](DefaultApi.md#partition_key_range_id_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics | 
[**partition_key_range_id_region_list_metrics**](DefaultApi.md#partition_key_range_id_region_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/databases/{databaseRid}/collections/{collectionRid}/partitionKeyRangeId/{partitionKeyRangeId}/metrics | 
[**percentile_list_metrics**](DefaultApi.md#percentile_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/percentile/metrics | 
[**percentile_source_target_list_metrics**](DefaultApi.md#percentile_source_target_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sourceRegion/{sourceRegion}/targetRegion/{targetRegion}/percentile/metrics | 
[**percentile_target_list_metrics**](DefaultApi.md#percentile_target_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/targetRegion/{targetRegion}/percentile/metrics | 
[**sql_resources_create_update_sql_container**](DefaultApi.md#sql_resources_create_update_sql_container) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName} | 
[**sql_resources_create_update_sql_database**](DefaultApi.md#sql_resources_create_update_sql_database) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName} | 
[**sql_resources_create_update_sql_stored_procedure**](DefaultApi.md#sql_resources_create_update_sql_stored_procedure) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName} | 
[**sql_resources_create_update_sql_trigger**](DefaultApi.md#sql_resources_create_update_sql_trigger) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName} | 
[**sql_resources_create_update_sql_user_defined_function**](DefaultApi.md#sql_resources_create_update_sql_user_defined_function) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName} | 
[**sql_resources_delete_sql_container**](DefaultApi.md#sql_resources_delete_sql_container) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName} | 
[**sql_resources_delete_sql_database**](DefaultApi.md#sql_resources_delete_sql_database) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName} | 
[**sql_resources_delete_sql_stored_procedure**](DefaultApi.md#sql_resources_delete_sql_stored_procedure) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName} | 
[**sql_resources_delete_sql_trigger**](DefaultApi.md#sql_resources_delete_sql_trigger) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName} | 
[**sql_resources_delete_sql_user_defined_function**](DefaultApi.md#sql_resources_delete_sql_user_defined_function) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName} | 
[**sql_resources_get_sql_container**](DefaultApi.md#sql_resources_get_sql_container) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName} | 
[**sql_resources_get_sql_container_throughput**](DefaultApi.md#sql_resources_get_sql_container_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default | 
[**sql_resources_get_sql_database**](DefaultApi.md#sql_resources_get_sql_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName} | 
[**sql_resources_get_sql_database_throughput**](DefaultApi.md#sql_resources_get_sql_database_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default | 
[**sql_resources_get_sql_stored_procedure**](DefaultApi.md#sql_resources_get_sql_stored_procedure) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures/{storedProcedureName} | 
[**sql_resources_get_sql_trigger**](DefaultApi.md#sql_resources_get_sql_trigger) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers/{triggerName} | 
[**sql_resources_get_sql_user_defined_function**](DefaultApi.md#sql_resources_get_sql_user_defined_function) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions/{userDefinedFunctionName} | 
[**sql_resources_list_sql_containers**](DefaultApi.md#sql_resources_list_sql_containers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers | 
[**sql_resources_list_sql_databases**](DefaultApi.md#sql_resources_list_sql_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases | 
[**sql_resources_list_sql_stored_procedures**](DefaultApi.md#sql_resources_list_sql_stored_procedures) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/storedProcedures | 
[**sql_resources_list_sql_triggers**](DefaultApi.md#sql_resources_list_sql_triggers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/triggers | 
[**sql_resources_list_sql_user_defined_functions**](DefaultApi.md#sql_resources_list_sql_user_defined_functions) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/userDefinedFunctions | 
[**sql_resources_update_sql_container_throughput**](DefaultApi.md#sql_resources_update_sql_container_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/containers/{containerName}/throughputSettings/default | 
[**sql_resources_update_sql_database_throughput**](DefaultApi.md#sql_resources_update_sql_database_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/sqlDatabases/{databaseName}/throughputSettings/default | 
[**table_resources_create_update_table**](DefaultApi.md#table_resources_create_update_table) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName} | 
[**table_resources_delete_table**](DefaultApi.md#table_resources_delete_table) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName} | 
[**table_resources_get_table**](DefaultApi.md#table_resources_get_table) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName} | 
[**table_resources_get_table_throughput**](DefaultApi.md#table_resources_get_table_throughput) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default | 
[**table_resources_list_tables**](DefaultApi.md#table_resources_list_tables) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables | 
[**table_resources_update_table_throughput**](DefaultApi.md#table_resources_update_table_throughput) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default | 


# **cassandra_resources_create_update_cassandra_keyspace**
> CassandraKeyspaceGetResults cassandra_resources_create_update_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version, create_update_cassandra_keyspace_parameters)



Create or update an Azure Cosmos DB Cassandra keyspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_keyspace_create_update_parameters import CassandraKeyspaceCreateUpdateParameters
from openapi_client.models.cassandra_keyspace_get_results import CassandraKeyspaceGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_cassandra_keyspace_parameters = openapi_client.CassandraKeyspaceCreateUpdateParameters() # CassandraKeyspaceCreateUpdateParameters | The parameters to provide for the current Cassandra keyspace.

    try:
        api_response = api_instance.cassandra_resources_create_update_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version, create_update_cassandra_keyspace_parameters)
        print("The response of DefaultApi->cassandra_resources_create_update_cassandra_keyspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_create_update_cassandra_keyspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_cassandra_keyspace_parameters** | [**CassandraKeyspaceCreateUpdateParameters**](CassandraKeyspaceCreateUpdateParameters.md)| The parameters to provide for the current Cassandra keyspace. | 

### Return type

[**CassandraKeyspaceGetResults**](CassandraKeyspaceGetResults.md)

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

# **cassandra_resources_create_update_cassandra_table**
> CassandraTableGetResults cassandra_resources_create_update_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, create_update_cassandra_table_parameters)



Create or update an Azure Cosmos DB Cassandra Table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_table_create_update_parameters import CassandraTableCreateUpdateParameters
from openapi_client.models.cassandra_table_get_results import CassandraTableGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_cassandra_table_parameters = openapi_client.CassandraTableCreateUpdateParameters() # CassandraTableCreateUpdateParameters | The parameters to provide for the current Cassandra Table.

    try:
        api_response = api_instance.cassandra_resources_create_update_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, create_update_cassandra_table_parameters)
        print("The response of DefaultApi->cassandra_resources_create_update_cassandra_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_create_update_cassandra_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_cassandra_table_parameters** | [**CassandraTableCreateUpdateParameters**](CassandraTableCreateUpdateParameters.md)| The parameters to provide for the current Cassandra Table. | 

### Return type

[**CassandraTableGetResults**](CassandraTableGetResults.md)

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

# **cassandra_resources_delete_cassandra_keyspace**
> cassandra_resources_delete_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.cassandra_resources_delete_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_delete_cassandra_keyspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **cassandra_resources_delete_cassandra_table**
> cassandra_resources_delete_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.cassandra_resources_delete_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_delete_cassandra_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **cassandra_resources_get_cassandra_keyspace**
> CassandraKeyspaceGetResults cassandra_resources_get_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



Gets the Cassandra keyspaces under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_keyspace_get_results import CassandraKeyspaceGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.cassandra_resources_get_cassandra_keyspace(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
        print("The response of DefaultApi->cassandra_resources_get_cassandra_keyspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_get_cassandra_keyspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**CassandraKeyspaceGetResults**](CassandraKeyspaceGetResults.md)

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

# **cassandra_resources_get_cassandra_keyspace_throughput**
> ThroughputSettingsGetResults cassandra_resources_get_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



Gets the RUs per second of the Cassandra Keyspace under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.cassandra_resources_get_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
        print("The response of DefaultApi->cassandra_resources_get_cassandra_keyspace_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_get_cassandra_keyspace_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **cassandra_resources_get_cassandra_table**
> CassandraTableGetResults cassandra_resources_get_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)



Gets the Cassandra table under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cassandra_table_get_results import CassandraTableGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.cassandra_resources_get_cassandra_table(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)
        print("The response of DefaultApi->cassandra_resources_get_cassandra_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_get_cassandra_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**CassandraTableGetResults**](CassandraTableGetResults.md)

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

# **cassandra_resources_get_cassandra_table_throughput**
> ThroughputSettingsGetResults cassandra_resources_get_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)



Gets the RUs per second of the Cassandra table under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.cassandra_resources_get_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version)
        print("The response of DefaultApi->cassandra_resources_get_cassandra_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_get_cassandra_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **cassandra_resources_list_cassandra_keyspaces**
> CassandraKeyspaceListResult cassandra_resources_list_cassandra_keyspaces(subscription_id, resource_group_name, account_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.cassandra_resources_list_cassandra_keyspaces(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->cassandra_resources_list_cassandra_keyspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_list_cassandra_keyspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **cassandra_resources_list_cassandra_tables**
> CassandraTableListResult cassandra_resources_list_cassandra_tables(subscription_id, resource_group_name, account_name, keyspace_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.cassandra_resources_list_cassandra_tables(subscription_id, resource_group_name, account_name, keyspace_name, api_version)
        print("The response of DefaultApi->cassandra_resources_list_cassandra_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_list_cassandra_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **cassandra_resources_update_cassandra_keyspace_throughput**
> ThroughputSettingsGetResults cassandra_resources_update_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Cassandra Keyspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The RUs per second of the parameters to provide for the current Cassandra Keyspace.

    try:
        api_response = api_instance.cassandra_resources_update_cassandra_keyspace_throughput(subscription_id, resource_group_name, account_name, keyspace_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->cassandra_resources_update_cassandra_keyspace_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_update_cassandra_keyspace_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The RUs per second of the parameters to provide for the current Cassandra Keyspace. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **cassandra_resources_update_cassandra_table_throughput**
> ThroughputSettingsGetResults cassandra_resources_update_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Cassandra table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The RUs per second of the parameters to provide for the current Cassandra table.

    try:
        api_response = api_instance.cassandra_resources_update_cassandra_table_throughput(subscription_id, resource_group_name, account_name, keyspace_name, table_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->cassandra_resources_update_cassandra_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cassandra_resources_update_cassandra_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **keyspace_name** | **str**| Cosmos DB keyspace name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The RUs per second of the parameters to provide for the current Cassandra table. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.database_accounts_check_name_exists(account_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_check_name_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
> DatabaseAccountGetResults database_accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, create_update_parameters)



Creates or updates an Azure Cosmos DB database account. The \"Update\" method is preferred when performing updates on an account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_create_update_parameters import DatabaseAccountCreateUpdateParameters
from openapi_client.models.database_account_get_results import DatabaseAccountGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_parameters** | [**DatabaseAccountCreateUpdateParameters**](DatabaseAccountCreateUpdateParameters.md)| The parameters to provide for the current database account. | 

### Return type

[**DatabaseAccountGetResults**](DatabaseAccountGetResults.md)

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
> DatabaseAccountGetResults database_accounts_get(subscription_id, resource_group_name, account_name, api_version)



Retrieves the properties of an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_get_results import DatabaseAccountGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**DatabaseAccountGetResults**](DatabaseAccountGetResults.md)

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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

# **database_accounts_update**
> DatabaseAccountGetResults database_accounts_update(subscription_id, resource_group_name, account_name, api_version, update_parameters)



Updates the properties of an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.database_account_get_results import DatabaseAccountGetResults
from openapi_client.models.database_account_update_parameters import DatabaseAccountUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_parameters = openapi_client.DatabaseAccountUpdateParameters() # DatabaseAccountUpdateParameters | The parameters to provide for the current database account.

    try:
        api_response = api_instance.database_accounts_update(subscription_id, resource_group_name, account_name, api_version, update_parameters)
        print("The response of DefaultApi->database_accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->database_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_parameters** | [**DatabaseAccountUpdateParameters**](DatabaseAccountUpdateParameters.md)| The parameters to provide for the current database account. | 

### Return type

[**DatabaseAccountGetResults**](DatabaseAccountGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The database account update operation will complete asynchronously. |  -  |

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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

# **gremlin_resources_create_update_gremlin_database**
> GremlinDatabaseGetResults gremlin_resources_create_update_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_gremlin_database_parameters)



Create or update an Azure Cosmos DB Gremlin database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_database_create_update_parameters import GremlinDatabaseCreateUpdateParameters
from openapi_client.models.gremlin_database_get_results import GremlinDatabaseGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_gremlin_database_parameters = openapi_client.GremlinDatabaseCreateUpdateParameters() # GremlinDatabaseCreateUpdateParameters | The parameters to provide for the current Gremlin database.

    try:
        api_response = api_instance.gremlin_resources_create_update_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_gremlin_database_parameters)
        print("The response of DefaultApi->gremlin_resources_create_update_gremlin_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_create_update_gremlin_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_gremlin_database_parameters** | [**GremlinDatabaseCreateUpdateParameters**](GremlinDatabaseCreateUpdateParameters.md)| The parameters to provide for the current Gremlin database. | 

### Return type

[**GremlinDatabaseGetResults**](GremlinDatabaseGetResults.md)

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

# **gremlin_resources_create_update_gremlin_graph**
> GremlinGraphGetResults gremlin_resources_create_update_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, create_update_gremlin_graph_parameters)



Create or update an Azure Cosmos DB Gremlin graph

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_graph_create_update_parameters import GremlinGraphCreateUpdateParameters
from openapi_client.models.gremlin_graph_get_results import GremlinGraphGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_gremlin_graph_parameters = openapi_client.GremlinGraphCreateUpdateParameters() # GremlinGraphCreateUpdateParameters | The parameters to provide for the current Gremlin graph.

    try:
        api_response = api_instance.gremlin_resources_create_update_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, create_update_gremlin_graph_parameters)
        print("The response of DefaultApi->gremlin_resources_create_update_gremlin_graph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_create_update_gremlin_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_gremlin_graph_parameters** | [**GremlinGraphCreateUpdateParameters**](GremlinGraphCreateUpdateParameters.md)| The parameters to provide for the current Gremlin graph. | 

### Return type

[**GremlinGraphGetResults**](GremlinGraphGetResults.md)

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

# **gremlin_resources_delete_gremlin_database**
> gremlin_resources_delete_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.gremlin_resources_delete_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_delete_gremlin_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **gremlin_resources_delete_gremlin_graph**
> gremlin_resources_delete_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.gremlin_resources_delete_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_delete_gremlin_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **gremlin_resources_get_gremlin_database**
> GremlinDatabaseGetResults gremlin_resources_get_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_database_get_results import GremlinDatabaseGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.gremlin_resources_get_gremlin_database(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->gremlin_resources_get_gremlin_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_get_gremlin_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**GremlinDatabaseGetResults**](GremlinDatabaseGetResults.md)

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

# **gremlin_resources_get_gremlin_database_throughput**
> ThroughputSettingsGetResults gremlin_resources_get_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.gremlin_resources_get_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->gremlin_resources_get_gremlin_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_get_gremlin_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **gremlin_resources_get_gremlin_graph**
> GremlinGraphGetResults gremlin_resources_get_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)



Gets the Gremlin graph under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.gremlin_graph_get_results import GremlinGraphGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.gremlin_resources_get_gremlin_graph(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)
        print("The response of DefaultApi->gremlin_resources_get_gremlin_graph:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_get_gremlin_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**GremlinGraphGetResults**](GremlinGraphGetResults.md)

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

# **gremlin_resources_get_gremlin_graph_throughput**
> ThroughputSettingsGetResults gremlin_resources_get_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)



Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.gremlin_resources_get_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version)
        print("The response of DefaultApi->gremlin_resources_get_gremlin_graph_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_get_gremlin_graph_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **gremlin_resources_list_gremlin_databases**
> GremlinDatabaseListResult gremlin_resources_list_gremlin_databases(subscription_id, resource_group_name, account_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.gremlin_resources_list_gremlin_databases(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->gremlin_resources_list_gremlin_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_list_gremlin_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **gremlin_resources_list_gremlin_graphs**
> GremlinGraphListResult gremlin_resources_list_gremlin_graphs(subscription_id, resource_group_name, account_name, database_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.gremlin_resources_list_gremlin_graphs(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->gremlin_resources_list_gremlin_graphs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_list_gremlin_graphs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **gremlin_resources_update_gremlin_database_throughput**
> ThroughputSettingsGetResults gremlin_resources_update_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Gremlin database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The RUs per second of the parameters to provide for the current Gremlin database.

    try:
        api_response = api_instance.gremlin_resources_update_gremlin_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->gremlin_resources_update_gremlin_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_update_gremlin_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The RUs per second of the parameters to provide for the current Gremlin database. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **gremlin_resources_update_gremlin_graph_throughput**
> ThroughputSettingsGetResults gremlin_resources_update_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Gremlin graph

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The RUs per second of the parameters to provide for the current Gremlin graph.

    try:
        api_response = api_instance.gremlin_resources_update_gremlin_graph_throughput(subscription_id, resource_group_name, account_name, database_name, graph_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->gremlin_resources_update_gremlin_graph_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->gremlin_resources_update_gremlin_graph_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **graph_name** | **str**| Cosmos DB graph name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The RUs per second of the parameters to provide for the current Gremlin graph. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **mongo_db_resources_create_update_mongo_db_collection**
> MongoDBCollectionGetResults mongo_db_resources_create_update_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, create_update_mongo_db_collection_parameters)



Create or update an Azure Cosmos DB MongoDB Collection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_collection_create_update_parameters import MongoDBCollectionCreateUpdateParameters
from openapi_client.models.mongo_db_collection_get_results import MongoDBCollectionGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_mongo_db_collection_parameters = openapi_client.MongoDBCollectionCreateUpdateParameters() # MongoDBCollectionCreateUpdateParameters | The parameters to provide for the current MongoDB Collection.

    try:
        api_response = api_instance.mongo_db_resources_create_update_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, create_update_mongo_db_collection_parameters)
        print("The response of DefaultApi->mongo_db_resources_create_update_mongo_db_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_create_update_mongo_db_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_mongo_db_collection_parameters** | [**MongoDBCollectionCreateUpdateParameters**](MongoDBCollectionCreateUpdateParameters.md)| The parameters to provide for the current MongoDB Collection. | 

### Return type

[**MongoDBCollectionGetResults**](MongoDBCollectionGetResults.md)

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

# **mongo_db_resources_create_update_mongo_db_database**
> MongoDBDatabaseGetResults mongo_db_resources_create_update_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_mongo_db_database_parameters)



Create or updates Azure Cosmos DB MongoDB database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_database_create_update_parameters import MongoDBDatabaseCreateUpdateParameters
from openapi_client.models.mongo_db_database_get_results import MongoDBDatabaseGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_mongo_db_database_parameters = openapi_client.MongoDBDatabaseCreateUpdateParameters() # MongoDBDatabaseCreateUpdateParameters | The parameters to provide for the current MongoDB database.

    try:
        api_response = api_instance.mongo_db_resources_create_update_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_mongo_db_database_parameters)
        print("The response of DefaultApi->mongo_db_resources_create_update_mongo_db_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_create_update_mongo_db_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_mongo_db_database_parameters** | [**MongoDBDatabaseCreateUpdateParameters**](MongoDBDatabaseCreateUpdateParameters.md)| The parameters to provide for the current MongoDB database. | 

### Return type

[**MongoDBDatabaseGetResults**](MongoDBDatabaseGetResults.md)

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

# **mongo_db_resources_delete_mongo_db_collection**
> mongo_db_resources_delete_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.mongo_db_resources_delete_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_delete_mongo_db_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **mongo_db_resources_delete_mongo_db_database**
> mongo_db_resources_delete_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.mongo_db_resources_delete_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_delete_mongo_db_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **mongo_db_resources_get_mongo_db_collection**
> MongoDBCollectionGetResults mongo_db_resources_get_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)



Gets the MongoDB collection under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_collection_get_results import MongoDBCollectionGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.mongo_db_resources_get_mongo_db_collection(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)
        print("The response of DefaultApi->mongo_db_resources_get_mongo_db_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_get_mongo_db_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**MongoDBCollectionGetResults**](MongoDBCollectionGetResults.md)

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

# **mongo_db_resources_get_mongo_db_collection_throughput**
> ThroughputSettingsGetResults mongo_db_resources_get_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)



Gets the RUs per second of the MongoDB collection under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.mongo_db_resources_get_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version)
        print("The response of DefaultApi->mongo_db_resources_get_mongo_db_collection_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_get_mongo_db_collection_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **mongo_db_resources_get_mongo_db_database**
> MongoDBDatabaseGetResults mongo_db_resources_get_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the MongoDB databases under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.mongo_db_database_get_results import MongoDBDatabaseGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.mongo_db_resources_get_mongo_db_database(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->mongo_db_resources_get_mongo_db_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_get_mongo_db_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**MongoDBDatabaseGetResults**](MongoDBDatabaseGetResults.md)

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

# **mongo_db_resources_get_mongo_db_database_throughput**
> ThroughputSettingsGetResults mongo_db_resources_get_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the RUs per second of the MongoDB database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.mongo_db_resources_get_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->mongo_db_resources_get_mongo_db_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_get_mongo_db_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **mongo_db_resources_list_mongo_db_collections**
> MongoDBCollectionListResult mongo_db_resources_list_mongo_db_collections(subscription_id, resource_group_name, account_name, database_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.mongo_db_resources_list_mongo_db_collections(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->mongo_db_resources_list_mongo_db_collections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_list_mongo_db_collections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **mongo_db_resources_list_mongo_db_databases**
> MongoDBDatabaseListResult mongo_db_resources_list_mongo_db_databases(subscription_id, resource_group_name, account_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.mongo_db_resources_list_mongo_db_databases(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->mongo_db_resources_list_mongo_db_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_list_mongo_db_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **mongo_db_resources_update_mongo_db_collection_throughput**
> ThroughputSettingsGetResults mongo_db_resources_update_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, update_throughput_parameters)



Update the RUs per second of an Azure Cosmos DB MongoDB collection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The RUs per second of the parameters to provide for the current MongoDB collection.

    try:
        api_response = api_instance.mongo_db_resources_update_mongo_db_collection_throughput(subscription_id, resource_group_name, account_name, database_name, collection_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->mongo_db_resources_update_mongo_db_collection_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_update_mongo_db_collection_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **collection_name** | **str**| Cosmos DB collection name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The RUs per second of the parameters to provide for the current MongoDB collection. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **mongo_db_resources_update_mongo_db_database_throughput**
> ThroughputSettingsGetResults mongo_db_resources_update_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)



Update RUs per second of the an Azure Cosmos DB MongoDB database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The RUs per second of the parameters to provide for the current MongoDB database.

    try:
        api_response = api_instance.mongo_db_resources_update_mongo_db_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->mongo_db_resources_update_mongo_db_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->mongo_db_resources_update_mongo_db_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The RUs per second of the parameters to provide for the current MongoDB database. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
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
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
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

# **sql_resources_create_update_sql_container**
> SqlContainerGetResults sql_resources_create_update_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, create_update_sql_container_parameters)



Create or update an Azure Cosmos DB SQL container

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_container_create_update_parameters import SqlContainerCreateUpdateParameters
from openapi_client.models.sql_container_get_results import SqlContainerGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_sql_container_parameters = openapi_client.SqlContainerCreateUpdateParameters() # SqlContainerCreateUpdateParameters | The parameters to provide for the current SQL container.

    try:
        api_response = api_instance.sql_resources_create_update_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, create_update_sql_container_parameters)
        print("The response of DefaultApi->sql_resources_create_update_sql_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_create_update_sql_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_sql_container_parameters** | [**SqlContainerCreateUpdateParameters**](SqlContainerCreateUpdateParameters.md)| The parameters to provide for the current SQL container. | 

### Return type

[**SqlContainerGetResults**](SqlContainerGetResults.md)

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

# **sql_resources_create_update_sql_database**
> SqlDatabaseGetResults sql_resources_create_update_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_sql_database_parameters)



Create or update an Azure Cosmos DB SQL database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_database_create_update_parameters import SqlDatabaseCreateUpdateParameters
from openapi_client.models.sql_database_get_results import SqlDatabaseGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_sql_database_parameters = openapi_client.SqlDatabaseCreateUpdateParameters() # SqlDatabaseCreateUpdateParameters | The parameters to provide for the current SQL database.

    try:
        api_response = api_instance.sql_resources_create_update_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version, create_update_sql_database_parameters)
        print("The response of DefaultApi->sql_resources_create_update_sql_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_create_update_sql_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_sql_database_parameters** | [**SqlDatabaseCreateUpdateParameters**](SqlDatabaseCreateUpdateParameters.md)| The parameters to provide for the current SQL database. | 

### Return type

[**SqlDatabaseGetResults**](SqlDatabaseGetResults.md)

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

# **sql_resources_create_update_sql_stored_procedure**
> SqlStoredProcedureGetResults sql_resources_create_update_sql_stored_procedure(subscription_id, resource_group_name, account_name, database_name, container_name, stored_procedure_name, api_version, create_update_sql_stored_procedure_parameters)



Create or update an Azure Cosmos DB SQL storedProcedure

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_stored_procedure_create_update_parameters import SqlStoredProcedureCreateUpdateParameters
from openapi_client.models.sql_stored_procedure_get_results import SqlStoredProcedureGetResults
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
    stored_procedure_name = 'stored_procedure_name_example' # str | Cosmos DB storedProcedure name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_sql_stored_procedure_parameters = openapi_client.SqlStoredProcedureCreateUpdateParameters() # SqlStoredProcedureCreateUpdateParameters | The parameters to provide for the current SQL storedProcedure.

    try:
        api_response = api_instance.sql_resources_create_update_sql_stored_procedure(subscription_id, resource_group_name, account_name, database_name, container_name, stored_procedure_name, api_version, create_update_sql_stored_procedure_parameters)
        print("The response of DefaultApi->sql_resources_create_update_sql_stored_procedure:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_create_update_sql_stored_procedure: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **stored_procedure_name** | **str**| Cosmos DB storedProcedure name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_sql_stored_procedure_parameters** | [**SqlStoredProcedureCreateUpdateParameters**](SqlStoredProcedureCreateUpdateParameters.md)| The parameters to provide for the current SQL storedProcedure. | 

### Return type

[**SqlStoredProcedureGetResults**](SqlStoredProcedureGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL storedProcedure create or update operation was completed successfully. |  -  |
**202** | The SQL storedProcedure create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_create_update_sql_trigger**
> SqlTriggerGetResults sql_resources_create_update_sql_trigger(subscription_id, resource_group_name, account_name, database_name, container_name, trigger_name, api_version, create_update_sql_trigger_parameters)



Create or update an Azure Cosmos DB SQL trigger

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_trigger_create_update_parameters import SqlTriggerCreateUpdateParameters
from openapi_client.models.sql_trigger_get_results import SqlTriggerGetResults
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
    trigger_name = 'trigger_name_example' # str | Cosmos DB trigger name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_sql_trigger_parameters = openapi_client.SqlTriggerCreateUpdateParameters() # SqlTriggerCreateUpdateParameters | The parameters to provide for the current SQL trigger.

    try:
        api_response = api_instance.sql_resources_create_update_sql_trigger(subscription_id, resource_group_name, account_name, database_name, container_name, trigger_name, api_version, create_update_sql_trigger_parameters)
        print("The response of DefaultApi->sql_resources_create_update_sql_trigger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_create_update_sql_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **trigger_name** | **str**| Cosmos DB trigger name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_sql_trigger_parameters** | [**SqlTriggerCreateUpdateParameters**](SqlTriggerCreateUpdateParameters.md)| The parameters to provide for the current SQL trigger. | 

### Return type

[**SqlTriggerGetResults**](SqlTriggerGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL trigger create or update operation was completed successfully. |  -  |
**202** | The SQL trigger create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_create_update_sql_user_defined_function**
> SqlUserDefinedFunctionGetResults sql_resources_create_update_sql_user_defined_function(subscription_id, resource_group_name, account_name, database_name, container_name, user_defined_function_name, api_version, create_update_sql_user_defined_function_parameters)



Create or update an Azure Cosmos DB SQL userDefinedFunction

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_user_defined_function_create_update_parameters import SqlUserDefinedFunctionCreateUpdateParameters
from openapi_client.models.sql_user_defined_function_get_results import SqlUserDefinedFunctionGetResults
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
    user_defined_function_name = 'user_defined_function_name_example' # str | Cosmos DB userDefinedFunction name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_sql_user_defined_function_parameters = openapi_client.SqlUserDefinedFunctionCreateUpdateParameters() # SqlUserDefinedFunctionCreateUpdateParameters | The parameters to provide for the current SQL userDefinedFunction.

    try:
        api_response = api_instance.sql_resources_create_update_sql_user_defined_function(subscription_id, resource_group_name, account_name, database_name, container_name, user_defined_function_name, api_version, create_update_sql_user_defined_function_parameters)
        print("The response of DefaultApi->sql_resources_create_update_sql_user_defined_function:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_create_update_sql_user_defined_function: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **user_defined_function_name** | **str**| Cosmos DB userDefinedFunction name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_sql_user_defined_function_parameters** | [**SqlUserDefinedFunctionCreateUpdateParameters**](SqlUserDefinedFunctionCreateUpdateParameters.md)| The parameters to provide for the current SQL userDefinedFunction. | 

### Return type

[**SqlUserDefinedFunctionGetResults**](SqlUserDefinedFunctionGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL userDefinedFunction create or update operation was completed successfully. |  -  |
**202** | The SQL userDefinedFunction create or update operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_delete_sql_container**
> sql_resources_delete_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.sql_resources_delete_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_delete_sql_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **sql_resources_delete_sql_database**
> sql_resources_delete_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.sql_resources_delete_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_delete_sql_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **sql_resources_delete_sql_stored_procedure**
> sql_resources_delete_sql_stored_procedure(subscription_id, resource_group_name, account_name, database_name, container_name, stored_procedure_name, api_version)



Deletes an existing Azure Cosmos DB SQL storedProcedure.

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
    stored_procedure_name = 'stored_procedure_name_example' # str | Cosmos DB storedProcedure name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.sql_resources_delete_sql_stored_procedure(subscription_id, resource_group_name, account_name, database_name, container_name, stored_procedure_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_delete_sql_stored_procedure: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **stored_procedure_name** | **str**| Cosmos DB storedProcedure name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
**202** | The SQL storedProcedure delete operation will complete asynchronously. |  -  |
**204** | The SQL storedProcedure delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_delete_sql_trigger**
> sql_resources_delete_sql_trigger(subscription_id, resource_group_name, account_name, database_name, container_name, trigger_name, api_version)



Deletes an existing Azure Cosmos DB SQL trigger.

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
    trigger_name = 'trigger_name_example' # str | Cosmos DB trigger name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.sql_resources_delete_sql_trigger(subscription_id, resource_group_name, account_name, database_name, container_name, trigger_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_delete_sql_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **trigger_name** | **str**| Cosmos DB trigger name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
**202** | The SQL trigger delete operation will complete asynchronously. |  -  |
**204** | The SQL trigger delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_delete_sql_user_defined_function**
> sql_resources_delete_sql_user_defined_function(subscription_id, resource_group_name, account_name, database_name, container_name, user_defined_function_name, api_version)



Deletes an existing Azure Cosmos DB SQL userDefinedFunction.

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
    user_defined_function_name = 'user_defined_function_name_example' # str | Cosmos DB userDefinedFunction name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.sql_resources_delete_sql_user_defined_function(subscription_id, resource_group_name, account_name, database_name, container_name, user_defined_function_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_delete_sql_user_defined_function: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **user_defined_function_name** | **str**| Cosmos DB userDefinedFunction name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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
**202** | The SQL userDefinedFunction delete operation will complete asynchronously. |  -  |
**204** | The SQL userDefinedFunction delete operation was completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_get_sql_container**
> SqlContainerGetResults sql_resources_get_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Gets the SQL container under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_container_get_results import SqlContainerGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_container(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_container:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_container: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlContainerGetResults**](SqlContainerGetResults.md)

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

# **sql_resources_get_sql_container_throughput**
> ThroughputSettingsGetResults sql_resources_get_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Gets the RUs per second of the SQL container under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_container_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_container_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **sql_resources_get_sql_database**
> SqlDatabaseGetResults sql_resources_get_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the SQL database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_database_get_results import SqlDatabaseGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_database(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlDatabaseGetResults**](SqlDatabaseGetResults.md)

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

# **sql_resources_get_sql_database_throughput**
> ThroughputSettingsGetResults sql_resources_get_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)



Gets the RUs per second of the SQL database under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **sql_resources_get_sql_stored_procedure**
> SqlStoredProcedureGetResults sql_resources_get_sql_stored_procedure(subscription_id, resource_group_name, account_name, database_name, container_name, stored_procedure_name, api_version)



Gets the SQL storedProcedure under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_stored_procedure_get_results import SqlStoredProcedureGetResults
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
    stored_procedure_name = 'stored_procedure_name_example' # str | Cosmos DB storedProcedure name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_stored_procedure(subscription_id, resource_group_name, account_name, database_name, container_name, stored_procedure_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_stored_procedure:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_stored_procedure: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **stored_procedure_name** | **str**| Cosmos DB storedProcedure name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlStoredProcedureGetResults**](SqlStoredProcedureGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL storedProcedure property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_get_sql_trigger**
> SqlTriggerGetResults sql_resources_get_sql_trigger(subscription_id, resource_group_name, account_name, database_name, container_name, trigger_name, api_version)



Gets the SQL trigger under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_trigger_get_results import SqlTriggerGetResults
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
    trigger_name = 'trigger_name_example' # str | Cosmos DB trigger name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_trigger(subscription_id, resource_group_name, account_name, database_name, container_name, trigger_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_trigger:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **trigger_name** | **str**| Cosmos DB trigger name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlTriggerGetResults**](SqlTriggerGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL trigger property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_get_sql_user_defined_function**
> SqlUserDefinedFunctionGetResults sql_resources_get_sql_user_defined_function(subscription_id, resource_group_name, account_name, database_name, container_name, user_defined_function_name, api_version)



Gets the SQL userDefinedFunction under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_user_defined_function_get_results import SqlUserDefinedFunctionGetResults
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
    user_defined_function_name = 'user_defined_function_name_example' # str | Cosmos DB userDefinedFunction name.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_get_sql_user_defined_function(subscription_id, resource_group_name, account_name, database_name, container_name, user_defined_function_name, api_version)
        print("The response of DefaultApi->sql_resources_get_sql_user_defined_function:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_get_sql_user_defined_function: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **user_defined_function_name** | **str**| Cosmos DB userDefinedFunction name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlUserDefinedFunctionGetResults**](SqlUserDefinedFunctionGetResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL userDefinedFunction property was retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_list_sql_containers**
> SqlContainerListResult sql_resources_list_sql_containers(subscription_id, resource_group_name, account_name, database_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_list_sql_containers(subscription_id, resource_group_name, account_name, database_name, api_version)
        print("The response of DefaultApi->sql_resources_list_sql_containers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_list_sql_containers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **sql_resources_list_sql_databases**
> SqlDatabaseListResult sql_resources_list_sql_databases(subscription_id, resource_group_name, account_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_list_sql_databases(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->sql_resources_list_sql_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_list_sql_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **sql_resources_list_sql_stored_procedures**
> SqlStoredProcedureListResult sql_resources_list_sql_stored_procedures(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Lists the SQL storedProcedure under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_stored_procedure_list_result import SqlStoredProcedureListResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_list_sql_stored_procedures(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->sql_resources_list_sql_stored_procedures:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_list_sql_stored_procedures: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlStoredProcedureListResult**](SqlStoredProcedureListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL stored procedure properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_list_sql_triggers**
> SqlTriggerListResult sql_resources_list_sql_triggers(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Lists the SQL trigger under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_trigger_list_result import SqlTriggerListResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_list_sql_triggers(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->sql_resources_list_sql_triggers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_list_sql_triggers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlTriggerListResult**](SqlTriggerListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL trigger properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_list_sql_user_defined_functions**
> SqlUserDefinedFunctionListResult sql_resources_list_sql_user_defined_functions(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)



Lists the SQL userDefinedFunction under an existing Azure Cosmos DB database account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sql_user_defined_function_list_result import SqlUserDefinedFunctionListResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.sql_resources_list_sql_user_defined_functions(subscription_id, resource_group_name, account_name, database_name, container_name, api_version)
        print("The response of DefaultApi->sql_resources_list_sql_user_defined_functions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_list_sql_user_defined_functions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**SqlUserDefinedFunctionListResult**](SqlUserDefinedFunctionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The SQL userDefinedFunction properties were retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_resources_update_sql_container_throughput**
> ThroughputSettingsGetResults sql_resources_update_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB SQL container

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The parameters to provide for the RUs per second of the current SQL container.

    try:
        api_response = api_instance.sql_resources_update_sql_container_throughput(subscription_id, resource_group_name, account_name, database_name, container_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->sql_resources_update_sql_container_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_update_sql_container_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **container_name** | **str**| Cosmos DB container name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The parameters to provide for the RUs per second of the current SQL container. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **sql_resources_update_sql_database_throughput**
> ThroughputSettingsGetResults sql_resources_update_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB SQL database

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The parameters to provide for the RUs per second of the current SQL database.

    try:
        api_response = api_instance.sql_resources_update_sql_database_throughput(subscription_id, resource_group_name, account_name, database_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->sql_resources_update_sql_database_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->sql_resources_update_sql_database_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **database_name** | **str**| Cosmos DB database name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The parameters to provide for the RUs per second of the current SQL database. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **table_resources_create_update_table**
> TableGetResults table_resources_create_update_table(subscription_id, resource_group_name, account_name, table_name, api_version, create_update_table_parameters)



Create or update an Azure Cosmos DB Table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.table_create_update_parameters import TableCreateUpdateParameters
from openapi_client.models.table_get_results import TableGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    create_update_table_parameters = openapi_client.TableCreateUpdateParameters() # TableCreateUpdateParameters | The parameters to provide for the current Table.

    try:
        api_response = api_instance.table_resources_create_update_table(subscription_id, resource_group_name, account_name, table_name, api_version, create_update_table_parameters)
        print("The response of DefaultApi->table_resources_create_update_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->table_resources_create_update_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **create_update_table_parameters** | [**TableCreateUpdateParameters**](TableCreateUpdateParameters.md)| The parameters to provide for the current Table. | 

### Return type

[**TableGetResults**](TableGetResults.md)

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

# **table_resources_delete_table**
> table_resources_delete_table(subscription_id, resource_group_name, account_name, table_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_instance.table_resources_delete_table(subscription_id, resource_group_name, account_name, table_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->table_resources_delete_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **table_resources_get_table**
> TableGetResults table_resources_get_table(subscription_id, resource_group_name, account_name, table_name, api_version)



Gets the Tables under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.table_get_results import TableGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.table_resources_get_table(subscription_id, resource_group_name, account_name, table_name, api_version)
        print("The response of DefaultApi->table_resources_get_table:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->table_resources_get_table: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**TableGetResults**](TableGetResults.md)

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

# **table_resources_get_table_throughput**
> ThroughputSettingsGetResults table_resources_get_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version)



Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the provided name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.table_resources_get_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version)
        print("The response of DefaultApi->table_resources_get_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->table_resources_get_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

# **table_resources_list_tables**
> TableListResult table_resources_list_tables(subscription_id, resource_group_name, account_name, api_version)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.

    try:
        api_response = api_instance.table_resources_list_tables(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->table_resources_list_tables:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->table_resources_list_tables: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 

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

# **table_resources_update_table_throughput**
> ThroughputSettingsGetResults table_resources_update_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version, update_throughput_parameters)



Update RUs per second of an Azure Cosmos DB Table

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.throughput_settings_get_results import ThroughputSettingsGetResults
from openapi_client.models.throughput_settings_update_parameters import ThroughputSettingsUpdateParameters
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-08-01.
    update_throughput_parameters = openapi_client.ThroughputSettingsUpdateParameters() # ThroughputSettingsUpdateParameters | The parameters to provide for the RUs per second of the current Table.

    try:
        api_response = api_instance.table_resources_update_table_throughput(subscription_id, resource_group_name, account_name, table_name, api_version, update_throughput_parameters)
        print("The response of DefaultApi->table_resources_update_table_throughput:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->table_resources_update_table_throughput: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Cosmos DB database account name. | 
 **table_name** | **str**| Cosmos DB table name. | 
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-08-01. | 
 **update_throughput_parameters** | [**ThroughputSettingsUpdateParameters**](ThroughputSettingsUpdateParameters.md)| The parameters to provide for the RUs per second of the current Table. | 

### Return type

[**ThroughputSettingsGetResults**](ThroughputSettingsGetResults.md)

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

