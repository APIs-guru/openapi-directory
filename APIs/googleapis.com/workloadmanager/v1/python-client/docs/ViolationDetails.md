# ViolationDetails

Message describing the violdation in execution result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | **str** | the name of asset | [optional] 
**observed** | **Dict[str, str]** | observed | [optional] 
**service_account** | **str** | the service account associate with resource | [optional] 

## Example

```python
from openapi_client.models.violation_details import ViolationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ViolationDetails from a JSON string
violation_details_instance = ViolationDetails.from_json(json)
# print the JSON string representation of the object
print(ViolationDetails.to_json())

# convert the object into a dict
violation_details_dict = violation_details_instance.to_dict()
# create an instance of ViolationDetails from a dict
violation_details_from_dict = ViolationDetails.from_dict(violation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


