# ListInstancesResponse

Response for listing notebook instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[Instance]**](Instance.md) | A list of returned instances. | [optional] 
**next_page_token** | **str** | Page token that can be used to continue listing from the last result in the next list call. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. For example, &#x60;[&#39;us-west1-a&#39;, &#39;us-central1-b&#39;]&#x60;. A ListInstancesResponse will only contain either instances or unreachables, | [optional] 

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


