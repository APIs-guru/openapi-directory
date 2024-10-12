# ResourceTestStatus

Describes the status of the test operation along with error information, if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ErrorResponse**](ErrorResponse.md) |  | [optional] 
**status** | **str** | The status of the test operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_test_status import ResourceTestStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceTestStatus from a JSON string
resource_test_status_instance = ResourceTestStatus.from_json(json)
# print the JSON string representation of the object
print(ResourceTestStatus.to_json())

# convert the object into a dict
resource_test_status_dict = resource_test_status_instance.to_dict()
# create an instance of ResourceTestStatus from a dict
resource_test_status_from_dict = ResourceTestStatus.from_dict(resource_test_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


