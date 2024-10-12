# StorageDatabasecenterProtoCommonProduct

Product specification for Condor resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | The specific engine that the underlying database is running. | [optional] 
**type** | **str** | Type of specific database product. It could be CloudSQL, AlloyDB etc.. | [optional] 
**version** | **str** | Version of the underlying database engine. Example values: For MySQL, it could be \&quot;8.0\&quot;, \&quot;5.7\&quot; etc.. For Postgres, it could be \&quot;14\&quot;, \&quot;15\&quot; etc.. | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_proto_common_product import StorageDatabasecenterProtoCommonProduct

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterProtoCommonProduct from a JSON string
storage_databasecenter_proto_common_product_instance = StorageDatabasecenterProtoCommonProduct.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterProtoCommonProduct.to_json())

# convert the object into a dict
storage_databasecenter_proto_common_product_dict = storage_databasecenter_proto_common_product_instance.to_dict()
# create an instance of StorageDatabasecenterProtoCommonProduct from a dict
storage_databasecenter_proto_common_product_from_dict = StorageDatabasecenterProtoCommonProduct.from_dict(storage_databasecenter_proto_common_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


