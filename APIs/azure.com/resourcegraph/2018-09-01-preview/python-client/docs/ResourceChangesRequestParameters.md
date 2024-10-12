# ResourceChangesRequestParameters

The parameters for a specific changes request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skip_token** | **str** | Acts as the continuation token for paged responses. | [optional] 
**top** | **int** | The maximum number of changes the client can accept in a paged response. | [optional] 
**interval** | [**DateTimeInterval**](DateTimeInterval.md) | Specifies the date and time interval for a changes request. | 
**resource_id** | **str** | Specifies the resource for a changes request. | 

## Example

```python
from openapi_client.models.resource_changes_request_parameters import ResourceChangesRequestParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceChangesRequestParameters from a JSON string
resource_changes_request_parameters_instance = ResourceChangesRequestParameters.from_json(json)
# print the JSON string representation of the object
print(ResourceChangesRequestParameters.to_json())

# convert the object into a dict
resource_changes_request_parameters_dict = resource_changes_request_parameters_instance.to_dict()
# create an instance of ResourceChangesRequestParameters from a dict
resource_changes_request_parameters_from_dict = ResourceChangesRequestParameters.from_dict(resource_changes_request_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


