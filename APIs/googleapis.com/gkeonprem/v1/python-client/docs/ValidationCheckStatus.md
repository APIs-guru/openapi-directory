# ValidationCheckStatus

ValidationCheckStatus defines the detailed validation check status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**List[ValidationCheckResult]**](ValidationCheckResult.md) | Individual checks which failed as part of the Preflight check execution. | [optional] 

## Example

```python
from openapi_client.models.validation_check_status import ValidationCheckStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationCheckStatus from a JSON string
validation_check_status_instance = ValidationCheckStatus.from_json(json)
# print the JSON string representation of the object
print(ValidationCheckStatus.to_json())

# convert the object into a dict
validation_check_status_dict = validation_check_status_instance.to_dict()
# create an instance of ValidationCheckStatus from a dict
validation_check_status_from_dict = ValidationCheckStatus.from_dict(validation_check_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


