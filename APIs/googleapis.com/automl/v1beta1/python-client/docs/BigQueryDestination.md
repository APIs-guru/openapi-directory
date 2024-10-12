# BigQueryDestination

The BigQuery location for the output content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri** | **str** | Required. BigQuery URI to a project, up to 2000 characters long. Accepted forms: * BigQuery path e.g. bq://projectId | [optional] 

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


