# CommitServicePerimetersResponse

A response to CommitServicePerimetersRequest. This will be put inside of Operation.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_perimeters** | [**List[ServicePerimeter]**](ServicePerimeter.md) | List of all the Service Perimeter instances in the Access Policy. | [optional] 

## Example

```python
from openapi_client.models.commit_service_perimeters_response import CommitServicePerimetersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CommitServicePerimetersResponse from a JSON string
commit_service_perimeters_response_instance = CommitServicePerimetersResponse.from_json(json)
# print the JSON string representation of the object
print(CommitServicePerimetersResponse.to_json())

# convert the object into a dict
commit_service_perimeters_response_dict = commit_service_perimeters_response_instance.to_dict()
# create an instance of CommitServicePerimetersResponse from a dict
commit_service_perimeters_response_from_dict = CommitServicePerimetersResponse.from_dict(commit_service_perimeters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


