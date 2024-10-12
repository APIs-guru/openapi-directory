# ResourceChangeDetailsRequestParameters

The parameters for a specific change details request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_id** | **str** | Specifies the change ID. | 
**resource_id** | **str** | Specifies the resource for a change details request. | 

## Example

```python
from openapi_client.models.resource_change_details_request_parameters import ResourceChangeDetailsRequestParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceChangeDetailsRequestParameters from a JSON string
resource_change_details_request_parameters_instance = ResourceChangeDetailsRequestParameters.from_json(json)
# print the JSON string representation of the object
print(ResourceChangeDetailsRequestParameters.to_json())

# convert the object into a dict
resource_change_details_request_parameters_dict = resource_change_details_request_parameters_instance.to_dict()
# create an instance of ResourceChangeDetailsRequestParameters from a dict
resource_change_details_request_parameters_from_dict = ResourceChangeDetailsRequestParameters.from_dict(resource_change_details_request_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


