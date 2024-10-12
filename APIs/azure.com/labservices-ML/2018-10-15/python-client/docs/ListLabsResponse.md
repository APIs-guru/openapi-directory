# ListLabsResponse

Lists the labs owned by a user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labs** | [**List[LabDetails]**](LabDetails.md) | List of all the labs | [optional] 

## Example

```python
from openapi_client.models.list_labs_response import ListLabsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLabsResponse from a JSON string
list_labs_response_instance = ListLabsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLabsResponse.to_json())

# convert the object into a dict
list_labs_response_dict = list_labs_response_instance.to_dict()
# create an instance of ListLabsResponse from a dict
list_labs_response_from_dict = ListLabsResponse.from_dict(list_labs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


