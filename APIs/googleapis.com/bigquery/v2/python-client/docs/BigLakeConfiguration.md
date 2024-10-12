# BigLakeConfiguration

Configuration for BigLake managed tables.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_id** | **str** | Required. The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection_id can have the form \&quot;&lt;project\\_id&gt;.&lt;location\\_id&gt;.&lt;connection\\_id&gt;\&quot; or \&quot;projects/&lt;project\\_id&gt;/locations/&lt;location\\_id&gt;/connections/&lt;connection\\_id&gt;\&quot;. | [optional] 
**file_format** | **str** | Required. The file format the table data is stored in. | [optional] 
**storage_uri** | **str** | Required. The fully qualified location prefix of the external folder where table data is stored. The &#39;*&#39; wildcard character is not allowed. The URI should be in the format \&quot;gs://bucket/path_to_table/\&quot; | [optional] 
**table_format** | **str** | Required. The table format the metadata only snapshots are stored in. | [optional] 

## Example

```python
from openapi_client.models.big_lake_configuration import BigLakeConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BigLakeConfiguration from a JSON string
big_lake_configuration_instance = BigLakeConfiguration.from_json(json)
# print the JSON string representation of the object
print(BigLakeConfiguration.to_json())

# convert the object into a dict
big_lake_configuration_dict = big_lake_configuration_instance.to_dict()
# create an instance of BigLakeConfiguration from a dict
big_lake_configuration_from_dict = BigLakeConfiguration.from_dict(big_lake_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


