# Services

The list of services for a given onboarded tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of service elements. | [optional] 
**value** | [**List[ServiceProperties]**](ServiceProperties.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.services import Services

# TODO update the JSON string below
json = "{}"
# create an instance of Services from a JSON string
services_instance = Services.from_json(json)
# print the JSON string representation of the object
print(Services.to_json())

# convert the object into a dict
services_dict = services_instance.to_dict()
# create an instance of Services from a dict
services_from_dict = Services.from_dict(services_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


