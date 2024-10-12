# QueryAccessibleDataRequest

Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_destination** | [**GoogleCloudHealthcareV1ConsentGcsDestination**](GoogleCloudHealthcareV1ConsentGcsDestination.md) |  | [optional] 
**request_attributes** | **Dict[str, str]** | The values of request attributes associated with this access request. | [optional] 
**resource_attributes** | **Dict[str, str]** | Optional. The values of resource attributes associated with the type of resources being requested. If no values are specified, then all resource types are included in the output. | [optional] 

## Example

```python
from openapi_client.models.query_accessible_data_request import QueryAccessibleDataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAccessibleDataRequest from a JSON string
query_accessible_data_request_instance = QueryAccessibleDataRequest.from_json(json)
# print the JSON string representation of the object
print(QueryAccessibleDataRequest.to_json())

# convert the object into a dict
query_accessible_data_request_dict = query_accessible_data_request_instance.to_dict()
# create an instance of QueryAccessibleDataRequest from a dict
query_accessible_data_request_from_dict = QueryAccessibleDataRequest.from_dict(query_accessible_data_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


