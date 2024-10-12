# CheckStatusResponse

The status of the connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | When the connector is not in ACTIVE state, the description must be populated to specify the reason why it&#39;s not in ACTIVE state. | [optional] 
**state** | **str** | State of the connector. | [optional] 

## Example

```python
from openapi_client.models.check_status_response import CheckStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckStatusResponse from a JSON string
check_status_response_instance = CheckStatusResponse.from_json(json)
# print the JSON string representation of the object
print(CheckStatusResponse.to_json())

# convert the object into a dict
check_status_response_dict = check_status_response_instance.to_dict()
# create an instance of CheckStatusResponse from a dict
check_status_response_from_dict = CheckStatusResponse.from_dict(check_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


