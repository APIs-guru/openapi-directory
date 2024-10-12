# ComplianceProperties

The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_result** | [**List[ComplianceSegment]**](ComplianceSegment.md) | An array of segment, which is the actually the compliance assessment. | [optional] [readonly] 
**assessment_timestamp_utc_date** | **datetime** | The timestamp when the Compliance calculation was conducted. | [optional] [readonly] 
**resource_count** | **int** | The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation). | [optional] [readonly] 

## Example

```python
from openapi_client.models.compliance_properties import ComplianceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceProperties from a JSON string
compliance_properties_instance = ComplianceProperties.from_json(json)
# print the JSON string representation of the object
print(ComplianceProperties.to_json())

# convert the object into a dict
compliance_properties_dict = compliance_properties_instance.to_dict()
# create an instance of ComplianceProperties from a dict
compliance_properties_from_dict = ComplianceProperties.from_dict(compliance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


