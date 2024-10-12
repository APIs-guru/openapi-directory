# BigQueryDestination

Parameters for using BigQuery as the destination of resource usage export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | The ID of a BigQuery Dataset. | [optional] 

## Example

```python
from openapi_client.models.big_query_destination import BigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryDestination from a JSON string
big_query_destination_instance = BigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(BigQueryDestination.to_json())

# convert the object into a dict
big_query_destination_dict = big_query_destination_instance.to_dict()
# create an instance of BigQueryDestination from a dict
big_query_destination_from_dict = BigQueryDestination.from_dict(big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


