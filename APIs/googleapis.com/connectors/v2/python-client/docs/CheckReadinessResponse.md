# CheckReadinessResponse

Response containing status of the connector for readiness prober.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.check_readiness_response import CheckReadinessResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckReadinessResponse from a JSON string
check_readiness_response_instance = CheckReadinessResponse.from_json(json)
# print the JSON string representation of the object
print(CheckReadinessResponse.to_json())

# convert the object into a dict
check_readiness_response_dict = check_readiness_response_instance.to_dict()
# create an instance of CheckReadinessResponse from a dict
check_readiness_response_from_dict = CheckReadinessResponse.from_dict(check_readiness_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


