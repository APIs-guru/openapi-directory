# SapValidationValidationDetail

Message describing the SAP validation metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **Dict[str, str]** | Optional. The pairs of metrics data: field name &amp; field value. | [optional] 
**is_present** | **bool** | Optional. Was there a SAP system detected for this validation type. | [optional] 
**sap_validation_type** | **str** | Optional. The SAP system that the validation data is from. | [optional] 

## Example

```python
from openapi_client.models.sap_validation_validation_detail import SapValidationValidationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SapValidationValidationDetail from a JSON string
sap_validation_validation_detail_instance = SapValidationValidationDetail.from_json(json)
# print the JSON string representation of the object
print(SapValidationValidationDetail.to_json())

# convert the object into a dict
sap_validation_validation_detail_dict = sap_validation_validation_detail_instance.to_dict()
# create an instance of SapValidationValidationDetail from a dict
sap_validation_validation_detail_from_dict = SapValidationValidationDetail.from_dict(sap_validation_validation_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


