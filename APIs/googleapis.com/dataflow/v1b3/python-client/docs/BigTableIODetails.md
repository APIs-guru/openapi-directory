# BigTableIODetails

Metadata for a Cloud Bigtable connector used by the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | InstanceId accessed in the connection. | [optional] 
**project_id** | **str** | ProjectId accessed in the connection. | [optional] 
**table_id** | **str** | TableId accessed in the connection. | [optional] 

## Example

```python
from openapi_client.models.big_table_io_details import BigTableIODetails

# TODO update the JSON string below
json = "{}"
# create an instance of BigTableIODetails from a JSON string
big_table_io_details_instance = BigTableIODetails.from_json(json)
# print the JSON string representation of the object
print(BigTableIODetails.to_json())

# convert the object into a dict
big_table_io_details_dict = big_table_io_details_instance.to_dict()
# create an instance of BigTableIODetails from a dict
big_table_io_details_from_dict = BigTableIODetails.from_dict(big_table_io_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


