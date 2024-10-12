# ListDatabaseInstancesResponse

The response from the ListDatabaseInstances method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | [**List[DatabaseInstance]**](DatabaseInstance.md) | List of each DatabaseInstance that is in the parent Firebase project. | [optional] 
**next_page_token** | **str** | If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to &#x60;ListDatabaseInstances&#x60; to find the next group of database instances. Page tokens are short-lived and should not be persisted. | [optional] 

## Example

```python
from openapi_client.models.list_database_instances_response import ListDatabaseInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDatabaseInstancesResponse from a JSON string
list_database_instances_response_instance = ListDatabaseInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDatabaseInstancesResponse.to_json())

# convert the object into a dict
list_database_instances_response_dict = list_database_instances_response_instance.to_dict()
# create an instance of ListDatabaseInstancesResponse from a dict
list_database_instances_response_from_dict = ListDatabaseInstancesResponse.from_dict(list_database_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


