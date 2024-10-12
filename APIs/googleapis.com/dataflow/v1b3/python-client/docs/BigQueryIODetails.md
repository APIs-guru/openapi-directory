# BigQueryIODetails

Metadata for a BigQuery connector used by the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset** | **str** | Dataset accessed in the connection. | [optional] 
**project_id** | **str** | Project accessed in the connection. | [optional] 
**query** | **str** | Query used to access data in the connection. | [optional] 
**table** | **str** | Table accessed in the connection. | [optional] 

## Example

```python
from openapi_client.models.big_query_io_details import BigQueryIODetails

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryIODetails from a JSON string
big_query_io_details_instance = BigQueryIODetails.from_json(json)
# print the JSON string representation of the object
print(BigQueryIODetails.to_json())

# convert the object into a dict
big_query_io_details_dict = big_query_io_details_instance.to_dict()
# create an instance of BigQueryIODetails from a dict
big_query_io_details_from_dict = BigQueryIODetails.from_dict(big_query_io_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


