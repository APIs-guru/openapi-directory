# DatastoreIODetails

Metadata for a Datastore connector used by the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** | Namespace used in the connection. | [optional] 
**project_id** | **str** | ProjectId accessed in the connection. | [optional] 

## Example

```python
from openapi_client.models.datastore_io_details import DatastoreIODetails

# TODO update the JSON string below
json = "{}"
# create an instance of DatastoreIODetails from a JSON string
datastore_io_details_instance = DatastoreIODetails.from_json(json)
# print the JSON string representation of the object
print(DatastoreIODetails.to_json())

# convert the object into a dict
datastore_io_details_dict = datastore_io_details_instance.to_dict()
# create an instance of DatastoreIODetails from a dict
datastore_io_details_from_dict = DatastoreIODetails.from_dict(datastore_io_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


