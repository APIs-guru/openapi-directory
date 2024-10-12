# SapValidation

A presentation of SAP workload insight. The schema of SAP workloads validation related data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | Required. The project_id of the cloud project that the Insight data comes from. | [optional] 
**validation_details** | [**List[SapValidationValidationDetail]**](SapValidationValidationDetail.md) | Optional. A list of SAP validation metrics data. | [optional] 
**zone** | **str** | Optional. The zone of the instance that the Insight data comes from. | [optional] 

## Example

```python
from openapi_client.models.sap_validation import SapValidation

# TODO update the JSON string below
json = "{}"
# create an instance of SapValidation from a JSON string
sap_validation_instance = SapValidation.from_json(json)
# print the JSON string representation of the object
print(SapValidation.to_json())

# convert the object into a dict
sap_validation_dict = sap_validation_instance.to_dict()
# create an instance of SapValidation from a dict
sap_validation_from_dict = SapValidation.from_dict(sap_validation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


