# ListInstancesResponse

Response for ListInstances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[Instance]**](Instance.md) | A list of Redis instances in the project in the specified location, or across all locations. If the &#x60;location_id&#x60; in the parent field of the request is \&quot;-\&quot;, all regions available to the project are queried, and the results aggregated. If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the &#x60;name&#x60; field set to a value of the form &#x60;projects/{project_id}/locations/{location_id}/instances/&#x60;- and the &#x60;status&#x60; field set to ERROR and &#x60;status_message&#x60; field set to \&quot;location not available for ListInstances\&quot;. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_instances_response import ListInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstancesResponse from a JSON string
list_instances_response_instance = ListInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(ListInstancesResponse.to_json())

# convert the object into a dict
list_instances_response_dict = list_instances_response_instance.to_dict()
# create an instance of ListInstancesResponse from a dict
list_instances_response_from_dict = ListInstancesResponse.from_dict(list_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


