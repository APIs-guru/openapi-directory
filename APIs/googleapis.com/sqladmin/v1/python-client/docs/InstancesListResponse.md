# InstancesListResponse

Database instances list response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[DatabaseInstance]**](DatabaseInstance.md) | List of database instance resources. | [optional] 
**kind** | **str** | This is always &#x60;sql#instancesList&#x60;. | [optional] 
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**warnings** | [**List[ApiWarning]**](ApiWarning.md) | List of warnings that occurred while handling the request. | [optional] 

## Example

```python
from openapi_client.models.instances_list_response import InstancesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesListResponse from a JSON string
instances_list_response_instance = InstancesListResponse.from_json(json)
# print the JSON string representation of the object
print(InstancesListResponse.to_json())

# convert the object into a dict
instances_list_response_dict = instances_list_response_instance.to_dict()
# create an instance of InstancesListResponse from a dict
instances_list_response_from_dict = InstancesListResponse.from_dict(instances_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


